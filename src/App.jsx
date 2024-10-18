import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

const BrandName = ({ mobile = false }) => {
	return (
		<div className="brand" style={{ gap: mobile ? "0px" : "5px" }}>
			<img src={'./Marrfa.png'} />
			<div
				style={{ fontSize: mobile ? "1.5rem" : "1.2rem" }}
				className="brand-name"
			>
				arrfa
			</div>
		</div>
	);
};

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the target date for countdown (can be modified as per your launch date)
    const targetDate = new Date("Oct 31, 2024 23:59:59").getTime();

    // Function to calculate the time difference and update the state
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    // Update countdown every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={styles.container}>
      <BrandName></BrandName>
      <h1 style={styles.heading}>We are Coming Soon!</h1>
      <p style={styles.subheading}>Stay tuned, our website is launching in:</p>
      <div style={styles.countdown}>
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </div>
    </div>
  );
};

// Basic inline styles
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f4f4f4',
    color: '#333',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  subheading: {
    fontSize: '1.2rem',
    marginBottom: '40px',
  },
  countdown: {
    fontSize: '2rem',
    color: '#ff6347',
    letterSpacing: '2px',
  },
  // Responsive styling
  '@media (max-width: 768px)': {
    heading: {
      fontSize: '2rem',
    },
    countdown: {
      fontSize: '1.5rem',
    },
  },
  '@media (max-width: 480px)': {
    heading: {
      fontSize: '1.5rem',
    },
    subheading: {
      fontSize: '1rem',
    },
    countdown: {
      fontSize: '1.2rem',
    },
  },
};




function App() {

  return (
    <>
      <ComingSoon></ComingSoon>
    </>
  )
}

export default App
