
import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

const kanbanData = [
  { Id: 1, Status: 'To Do', Summary: 'Task 1' },
  { Id: 2, Status: 'In Progress', Summary: 'Task 2' },
  { Id: 3, Status: 'Completed', Summary: 'Task 3' }
];

const kanbanGrid = [
  { headerText: 'To Do', keyField: 'To Do' },
  { headerText: 'In Progress', keyField: 'In Progress' },
  { headerText: 'Completed', keyField: 'Completed' }
];

const Kanban = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <KanbanComponent
      id="kanban"
      keyField="Status"
      dataSource={kanbanData}
      cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
    >
      <ColumnsDirective>
        {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
      </ColumnsDirective>
    </KanbanComponent>
  </div>
);

export default Kanban;
