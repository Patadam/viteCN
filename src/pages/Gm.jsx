import { useEffect, useState } from "react";
import style from "./gm.module.css";

export default function GeneralMeeting() {
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    const calculateTimeRemaining = () => {
      // Set your target date and time in a specific timezone (replace 'America/New_York' with your timezone)
      const targetDate = new Date("2024-01-22T11:00:00").toLocaleString("en-US", { timeZone: "Australia/Brisbane" });

      // Get the current time in the specified timezone
      const now = new Date().toLocaleString("en-US", { timeZone: "Australia/Brisbane" });

      // Convert dates to UTC for accurate calculations
      const targetUtc = new Date(targetDate).getTime();
      const nowUtc = new Date(now).getTime();

      // Calculate the time remaining
      const distance = targetUtc - nowUtc;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Format the time remaining
      const formattedTimeRemaining = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

      // Update the state with the time remaining
      setTimeRemaining(formattedTimeRemaining);
    };

    // Update time remaining immediately and then every second
    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    // Clean up the interval on unmounting the component
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="edges">
        <h1>January 2024 General Meeting</h1>
        <p>Dear Code Network members,</p>
        <p>
          Due to a significant change in the execute team for 2024 we are required under section 15.2 of the Constitution to call a General
          Meeting (GM) to elect a replacement for an outgoing role.
        </p>
        <p>
          We are currenting communicating with the Guild to confirm details around this GM. We would appreciate your attendance and support
          in this matter and will be able to answer questions during the meeting.
        </p>
        <p>
          We are seeking any members interested in taking on the responsibilities and roles of <strong>Treasurer</strong> to attend and make
          their interest known to the President.
        </p>
        <div>
          <br />
          <hr />
          <br />
          <div className={style.schedulewrapper}>
            <p>
              Scheduled for -- nd of January 2024 at 00:00 AM AEST (ONLINE - DISCORD)<span>0 Days, 0 Hours, 0 Minutes, 0 Seconds</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
