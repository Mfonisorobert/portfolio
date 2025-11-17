// import { useEffect, useRef, useState } from "react";

// function ProgressBar({ label, percentage }) {
//   const barRef = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         setVisible(entry.isIntersecting); // true = animate, false = reset
//       });
//     });

//     observer.observe(barRef.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="flex items-center space-x-4">
//       <p className="w-3/12">{label}</p>

//       <div className="grow bg-gray-800 h-2.5 rounded-full overflow-hidden shadow-[0_0_10px_rgba(0,255,0,0.9)]" ref={barRef}>
//         <div
//           className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded transition-all duration-1000"
//           style={{ width: visible ? percentage : "0%" }}
//         ></div>
//       </div>
//       <p className="text-white ml-2">{visible ? percentage : "0%"}</p>

//     </div>
//   );
// }

// export default ProgressBar;




// This particular code, the percetage moves as the bar increases from left to right
import { useEffect, useRef, useState } from "react";

function ProgressBar({ label, percentage, delay }) {
  const barRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Intersection Observer detects scroll visibility
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
          setCounter(0); // reset counter when scrolled away
        }
      });
    });

    observer.observe(barRef.current);

    return () => observer.disconnect();
  }, []);

  // Smooth number counting (0 → %)
  useEffect(() => {
    if (visible) {
      let start = 0;
      const end = parseInt(percentage);

      const interval = setInterval(() => {
        start++;
        setCounter(start);
        if (start >= end) clearInterval(interval);
      }, 10);

      return () => clearInterval(interval);
    }
  }, [visible, percentage]);


  return (
    <div className="flex items-center gap-4">
      <p className="w-3/12 md:w-2/12">{label}</p>

      <div
        className="grow bg-gray-800 h-2.5 rounded-full overflow-hidden"
        ref={barRef}
      >
        <div
          className="
            bg-gradient-to-r from-pink-500 to-blue-500 h-2.5 rounded
            shadow-[0_0_10px_rgba(0,255,0,0.6)]
          "
          style={{
            width: visible ? percentage : "0%",
            transition: `width 1.2s ease-out ${delay}ms`,
            animation: visible ? "bounceWidth 1.2s ease-out" : "none",
            "--final-width": percentage,
          }}
        ></div>
      </div>

      <p className="w-10 text-white">{counter}%</p>
    </div>
  );
}

export default ProgressBar;


