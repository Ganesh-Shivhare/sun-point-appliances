interface EmailData {
  name: string;
  phone: string;
  email: string;
}

// Send email function using API endpoint
export const sendUserInfoEmail = async (userData: EmailData): Promise<boolean> => {
  try {
    // Use environment variable for API URL, fallback to localhost for development
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
    const response = await fetch(`${apiUrl}/api/send-email`, {
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