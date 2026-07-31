/**
 * 后端 API 入口
 * 所有后端调用都通过此文件统一管理
 * 后续接入真实后端时只需修改此文件即可
 */

const API_BASE = import.meta.env.VITE_API_BASE || '/api';

// 通用请求方法
async function request<T = any>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE}${path}`;
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };

  const token = localStorage.getItem('token');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.warn(`[API Mock] ${path}`, error);
    // 返回 mock 数据，避免阻塞开发
    return mockResponse(path, options) as T;
  }
}

function mockResponse(path: string, options: RequestInit): any {
  if (path.startsWith('/chat/send')) {
    return {
      code: 0,
      data: {
        message: '感谢您的咨询，我们的顾问会尽快与您联系。',
        timestamp: Date.now(),
      },
    };
  }
  if (path.startsWith('/contact/submit')) {
    return { code: 0, data: { success: true } };
  }
  return { code: 0, data: null };
}

// API 接口
export const api = {
  // 聊天相关
  chat: {
    send: (data: { message: string; sessionId?: string }) =>
      request('/chat/send', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
    history: (sessionId: string) =>
      request(`/chat/history?sessionId=${sessionId}`),
  },

  // 联系咨询
  contact: {
    submit: (data: { name: string; phone: string; email?: string; message: string }) =>
      request('/contact/submit', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  },

  // 产品
  product: {
    list: () => request('/product/list'),
    detail: (id: string) => request(`/product/${id}`),
  },

  // 案例
  cases: {
    list: () => request('/cases/list'),
    detail: (id: string) => request(`/cases/${id}`),
  },

  // 图片上传
  upload: {
    image: async (file: File): Promise<{ url: string }> => {
      const formData = new FormData();
      formData.append('file', file);
      try {
        const response = await fetch(`${API_BASE}/upload/image`, {
          method: 'POST',
          body: formData,
        });
        if (!response.ok) throw new Error('Upload failed');
        return await response.json();
      } catch (error) {
        // Mock: 返回本地预览URL
        return { url: URL.createObjectURL(file) };
      }
    },
  },
};

export default api;