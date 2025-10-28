import './Page.css';

function Payment() {
  return (
    <div className="page-container">
      <div className="content-section">
        <h1 className="page-title">Payment Information</h1>
        <p className="page-subtitle">Secure and Convenient Payment Options</p>
        
        <div className="payment-info">
          <div className="payment-section">
            <h2>Accepted Payment Methods</h2>
            
            <div className="payment-methods">
              <div className="payment-method">
                <div className="method-icon">🏦</div>
                <h3>Bank Transfer</h3>
                <p>Direct bank transfer for secure and reliable transactions. Processing time: 2-3 business days.</p>
              </div>
              
              <div className="payment-method">
                <div className="method-icon">💳</div>
                <h3>Credit/Debit Cards</h3>
                <p>Accepted worldwide cards including Visa, MasterCard, and American Express. Instant processing.</p>
              </div>
              
              <div className="payment-method">
                <div className="method-icon">🌐</div>
                <h3>Online Payment Gateways</h3>
                <p>PayPal, Stripe, and other secure online payment solutions for quick and easy transactions.</p>
              </div>
              
              <div className="payment-method">
                <div className="method-icon">📱</div>
                <h3>Digital Wallets</h3>
                <p>Modern payment options including Apple Pay, Google Pay, and mobile banking apps.</p>
              </div>
            </div>
          </div>
          
          <div className="payment-section razorpay-section">
            <h2>Pay Now - Razorpay Gateway</h2>
            <p className="razorpay-description">
              Have a pending payment? Use our secure Razorpay payment gateway to settle your dues instantly.
            </p>
            <a 
              href="https://razorpay.me/@yadardageetatraders" 
              target="_blank" 
              rel="noopener noreferrer"
              className="razorpay-button"
            >
              <div className="razorpay-icon">💳</div>
              <div>
                <h3>Pay via Razorpay</h3>
                <p>Instant payment processing</p>
              </div>
              <div className="razorpay-arrow">→</div>
            </a>
            <p className="razorpay-note">
              Secure payment gateway powered by Razorpay. All major cards, UPI, and net banking accepted.
            </p>
          </div>
          
          <div className="payment-section">
            <h2>Payment Terms</h2>
            <div className="terms-grid">
              <div className="term-card">
                <h4>Standard Terms</h4>
                <p>Net 30 days for established customers with good credit history.</p>
              </div>
              
              <div className="term-card">
                <h4>Payment Plans</h4>
                <p>Flexible installment options Simplifies bulk orders and long-term contracts.</p>
              </div>
              
              <div className="term-card">
                <h4>Currency Support</h4>
                <p>Multi-currency transactions in USD, EUR, GBP, and other major currencies.</p>
              </div>
            </div>
          </div>
          
          <div className="contact-info-box">
            <h2>Need Assistance?</h2>
            <p>For payment inquiries or to discuss custom payment solutions, please contact our finance team:</p>
            <ul>
              <li><strong>Email:</strong> sales@yadardageetatraders.com</li>
              <li><strong>Phone:</strong> +91 8884444852</li>
              <li><strong>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM IST</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
