import { Hono } from 'hono';
import { describe, it, expect } from 'vitest';


const app = new Hono();

app.use('*', async (c, next) => {
  c.set('userId' as any, 'test-user-id');
  await next();
});

app.post('/medication', async (c) => {
  const userId = c.get('userId' as any);
  const body = await c.req.json();
  
  if (!body.alertPeriodInHours) {
    return c.json({ success: false, error: 'Missing required field' }, 400);
  }
  
  const medication = {
    medicationId: 'test-id',
    userId,
    ...body,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  return c.json({ success: true, medication }, 201);
});

app.get('/medication', async (c) => {
  const userId = c.get('userId' as any);
  
  const medications = [{
    medicationId: 'test-id',
    userId,
    name: 'test-medication',
    alertPeriodInHours: 12,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }];
  
  return c.json({ success: true, medications }, 200);
});

describe('Medication Routes (TypeScript)', () => {
  it('should create a medication successfully', async () => {
    const requestBody = {
      name: 'dipirona',
      dose: '30mg',
      description: 'Dor de cabeca',
      alertPeriodInHours: 12
    };

    const res = await app.request('/medication', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    });

    expect(res.status).toBe(201);
    const json = await res.json();
    expect(json.success).toBe(true);
    expect(json.medication.name).toBe('dipirona');
    expect(json.medication.userId).toBe('test-user-id');
  });

  it('should return 400 when required field is missing', async () => {
    const res = await app.request('/medication', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'dipirona' }),
    });

    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.success).toBe(false);
  });

  it('should get all medications successfully', async () => {
    const res = await app.request('/medication');

    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.success).toBe(true);
    expect(Array.isArray(json.medications)).toBe(true);
  });
});
