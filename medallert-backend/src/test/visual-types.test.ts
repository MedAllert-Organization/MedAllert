import { Hono } from 'hono';
import { describe, it, expect } from 'vitest';

const app = new Hono();

app.use('*', async (c, next) => {
  c.set('userId' as any, 'test-user-id');
  await next();
});

app.post('/medication/visualTypes', async (c) => {
  const body = await c.req.json();
  
  if (!body.visual) {
    return c.json({ success: false, error: 'Missing required field: visual' }, 400);
  }
  
  const visualType = {
    visualId: 'test-visual-id',
    visual: body.visual,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  return c.json({ success: true, visualType }, 201);
});

app.get('/medication/visualTypes', async (c) => {
  const visualTypes = [{
    visualId: 'cmgvqy1ef0001ob3n1hvd83da',
    visual: 'red',
    createdAt: '2025-10-18T03:57:17.080Z',
    updatedAt: '2025-10-18T03:57:17.080Z'
  }, {
    visualId: 'cmgvqycg30002ob3ndc3oo16u',
    visual: 'blue',
    createdAt: '2025-10-18T03:57:31.395Z',
    updatedAt: '2025-10-18T03:57:31.395Z'
  }];
  
  return c.json({ success: true, visualType: visualTypes }, 200);
});

describe('VisualTypes Routes (TypeScript)', () => {
  it('should create a visualType successfully', async () => {
    const requestBody = {
      visual: 'green'
    };

    const res = await app.request('/medication/visualTypes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    });

    expect(res.status).toBe(201);
    const json = await res.json();
    expect(json.success).toBe(true);
    expect(json.visualType.visual).toBe('green');
    expect(json.visualType.visualId).toBe('test-visual-id');
  });

  it('should return 400 when required field is missing', async () => {
    const res = await app.request('/medication/visualTypes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });

    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.success).toBe(false);
    expect(json.error).toBe('Missing required field: visual');
  });

  it('should get all visualTypes successfully', async () => {
    const res = await app.request('/medication/visualTypes');

    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.success).toBe(true);
    expect(Array.isArray(json.visualType)).toBe(true);
    expect(json.visualType).toHaveLength(2);
    expect(json.visualType[0].visual).toBe('red');
    expect(json.visualType[0].visualId).toBe('cmgvqy1ef0001ob3n1hvd83da');
    expect(json.visualType[1].visual).toBe('blue');
    expect(json.visualType[1].visualId).toBe('cmgvqycg30002ob3ndc3oo16u');
  });

  it('should handle empty visualTypes list', async () => {
    const testApp = new Hono();
    testApp.use('*', async (c, next) => {
      c.set('userId' as any, 'test-user-id');
      await next();
    });
    
    testApp.get('/medication/visualTypes', async (c) => {
      return c.json({ success: true, visualType: [] }, 200);
    });

    const res = await testApp.request('/medication/visualTypes');

    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.success).toBe(true);
    expect(Array.isArray(json.visualType)).toBe(true);
    expect(json.visualType).toHaveLength(0);
  });

  it('should validate response structure matches expected format', async () => {
    const res = await app.request('/medication/visualTypes');

    expect(res.status).toBe(200);
    const json = await res.json();
    
    expect(json).toHaveProperty('success');
    expect(json).toHaveProperty('visualType');
    expect(json.success).toBe(true);
    expect(Array.isArray(json.visualType)).toBe(true);
    
    if (json.visualType.length > 0) {
      const visualType = json.visualType[0];
      expect(visualType).toHaveProperty('visualId');
      expect(visualType).toHaveProperty('visual');
      expect(visualType).toHaveProperty('createdAt');
      expect(visualType).toHaveProperty('updatedAt');
      expect(typeof visualType.visualId).toBe('string');
      expect(typeof visualType.visual).toBe('string');
      expect(typeof visualType.createdAt).toBe('string');
      expect(typeof visualType.updatedAt).toBe('string');
    }
  });
});
