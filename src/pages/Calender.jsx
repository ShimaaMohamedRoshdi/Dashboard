// import React, { useRef } from 'react';
// import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
// import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

// import { scheduleData } from '../data/dummy';
// import { Header } from '../components';

// const Scheduler = () => {
//   const scheduleRef = useRef(null);

//   const change = (args) => {
//     if (scheduleRef.current) {
//       scheduleRef.current.selectedDate = args.value;
//       scheduleRef.current.dataBind();
//     }
//   };

//   const onDragStart = (arg) => {
//     if (arg.navigation) {
//       arg.navigation.enable = true;
//     }
//   };

//   return (
//     <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
//       <Header category="App" title="Calendar" />
//       <ScheduleComponent
//         height="650px"
//         ref={scheduleRef}
//         selectedDate={new Date(2021, 0, 10)}
//         eventSettings={{ dataSource: scheduleData }}
//         dragStart={onDragStart}
//       >
//         <ViewsDirective>
//           {['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) => (
//             <ViewDirective key={item} option={item} />
//           ))}
//         </ViewsDirective>
//         <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
//       </ScheduleComponent>
//       <div className="mt-5">
//         <table style={{ width: '100%', background: 'white' }}>
//           <tbody>
//             <tr style={{ height: '50px' }}>
//               <td style={{ width: '100%' }}>
//                 <DatePickerComponent
//                   value={new Date(2021, 0, 10)}
//                   showClearButton={false}
//                   placeholder="Current Date"
//                   floatLabelType="Always"
//                   change={change}
//                 />
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Scheduler;
import React, { useRef } from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

import { scheduleData } from "../data/dummy";
import { Header } from "../components";

const Scheduler = () => {
  const scheduleRef = useRef(null);

  const change = (args) => {
    if (scheduleRef.current) {
      scheduleRef.current.selectedDate = args.value;
      scheduleRef.current.dataBind();
    }
  };

  const onDragStart = (arg) => {
    if (arg.navigation) {
      arg.navigation.enable = true;
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-4 md:p-10 bg-gradient-to-r from-gray-100 to-white rounded-3xl shadow-lg">
      <Header category="App" title="Calendar" />
      <div className="flex flex-col gap-6">
        <ScheduleComponent
         
          ref={scheduleRef}
          selectedDate={new Date(2021, 0, 10)}
          eventSettings={{ dataSource: scheduleData }}
          dragStart={onDragStart}
          className="rounded-lg shadow-sm border"
        >
          <ViewsDirective>
            {["Day", "Week", "WorkWeek", "Month", "Agenda"].map((item) => (
              <ViewDirective key={item} option={item} />
            ))}
          </ViewsDirective>
          <Inject
            services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
          />
        </ScheduleComponent>
        <div className="flex justify-center">
          <DatePickerComponent
            value={new Date(2021, 0, 10)}
            showClearButton={false}
            placeholder="Select a Date"
            floatLabelType="Always"
            change={change}
            className="rounded-lg border p-2 shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Scheduler;
