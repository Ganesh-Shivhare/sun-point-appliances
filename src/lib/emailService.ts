interface EmailData {
  name: string;
  phone: string;
  email: string;
}

// Send email function using API endpoint
export const sendUserInfoEmail = async (userData: EmailData): Promise<boolean> => {
  try {
    // Use environment variable for API URL, fallback to localhost for development
    // Prefer explicit VITE_API_URL if provided; otherwise use current origin in browser.
    const apiBase: string =
      (import.meta as any)?.env?.VITE_API_URL ||
      (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3001');

    const response = await fetch(`${apiBase}/api/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('Email sent successfully:', result.messageId);
      return true;
    } else {
      console.error('Email sending failed:', result.message);
      return false;
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}; 