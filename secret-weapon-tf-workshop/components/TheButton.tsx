import React from "react";
import { atcb_init } from "add-to-calendar-button";
import 'add-to-calendar-button/assets/css/atcb.css';

const TheButton = () => {
    React.useEffect( () => { atcb_init() }, []);
    return (
      <div className="atcb">
        { '{' }
          "name":"Secret Weapon Terraform Workshop",
          "description":"A nice description does not hurt",
          "startDate":"2022-11-23",
          "endDate":"2022-11-23",
          "startTime":"16:00",
          "endTime":"18:00",
          "location":"Somewhere in the office",
          "label":"Going?",
          "options":[
            "Apple",
            "Google",
            "iCal",
            "Microsoft365",
            "Outlook.com",
            "Yahoo"
          ],
          "timeZone":"Europe/Berlin",
          "iCalFileName":"Reminder-Event"
        { '}' }
      </div>
    );
  }

  export default TheButton