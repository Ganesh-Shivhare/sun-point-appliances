interface EmailData {
  name: string;
  phone: string;
  email: string;
}

// Send email function using API endpoint
export const sendUserInfoEmail = async (userData: EmailData): Promise<boolean> => {
  try {
    const response = await fetch('http://localhost:3001/api/send-email', {
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