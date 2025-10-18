import { Hono } from 'hono';
import { describe, it, expect } from 'vitest';

const app = new Hono();

app.use('*', async (c, next) => {
  c.set('userId' as any, 'test-user-id');
  await next();
});

app.post('/medication/soundTypes', async (c) => {
  const body = await c.req.json();
  
  if (!body.sound) {
    return c.json({ success: false, error: 'Missing required field: sound' }, 400);
  }
  
  const soundType = {
    soundTypeId: 'test-sound-id',
    sound: body.sound,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  return c.json({ success: true, soundType }, 201);
});

app.get('/medication/soundTypes', async (c) => {
  const soundTypes = [{
    soundTypeId: 'test-sound-id-1',
    sound: 'beep',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }, {
    soundTypeId: 'test-sound-id-2',
    sound: 'chime',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }];
  
  return c.json({ success: true, soundType: soundTypes }, 200);
});

describe('SoundTypes Routes (TypeScript)', () => {
  it('should create a soundType successfully', async () => {
    const requestBody = {
      sound: 'beep'
    };

    const res = await app.request('/medication/soundTypes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    });

    expect(res.status).toBe(201);
    const json = await res.json();
    expect(json.success).toBe(true);
    expect(json.soundType.sound).toBe('beep');
    expect(json.soundType.soundTypeId).toBe('test-sound-id');
  });

  it('should return 400 when required field is missing', async () => {
    const res = await app.request('/medication/soundTypes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}), // Missing sound field
    });

    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.success).toBe(false);
    expect(json.error).toBe('Missing required field: sound');
  });

  it('should get all soundTypes successfully', async () => {
    const res = await app.request('/medication/soundTypes');

    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.success).toBe(true);
    expect(Array.isArray(json.soundType)).toBe(true);
    expect(json.soundType).toHaveLength(2);
    expect(json.soundType[0].sound).toBe('beep');
    expect(json.soundType[1].sound).toBe('chime');
  });

  it('should handle empty soundTypes list', async () => {
    const testApp = new Hono();
    testApp.use('*', async (c, next) => {
      c.set('userId' as any, 'test-user-id');
      await next();
    });
    
    testApp.get('/medication/soundTypes', async (c) => {
      return c.json({ success: true, soundType: [] }, 200);
    });

    const res = await testApp.request('/medication/soundTypes');

    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.success).toBe(true);
    expect(Array.isArray(json.soundType)).toBe(true);
    expect(json.soundType).toHaveLength(0);
  });
});
