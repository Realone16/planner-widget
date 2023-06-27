WHY THE STOPWATCH WIDGET WAS BUILT AND HOW IT WORKS

With the inclusion of the Stopwatch widget, users of the planning app have access to crucial time management features. People can correctly monitor and track their activities thanks to this, which increases productivity and efficiency. The stopwatch widget offers simplicity and ease of use with its user-friendly layout and simple controls. This widget guarantees accurate time monitoring for projects, studying sessions, and break management. The planner app gives users the ability to more precisely and successfully manage their time allocation, maintain focus, and accomplish their goals by incorporating this widget.
The logic of our stopwatch is that at every 10 milliseconds, we will update every individual object of our stopwatch state. 
When a user clicks on a "start" button for the stopwatch, it sets the “isRunning” property of the stopwatch to “true” and records the starting time of the stopwatch. 
When a user clicks on a "stop" button for the stopwatch. It sets the “isRunning” property of the stopwatch to “false” and records the duration of the pause.
When a user clicks on a "stop" button for the stopwatch. It sets the “isRunning” property of the stopwatch to “false” and records the duration of the pause.
When a user clicks on a "lap" button for the stopwatch, the handleLap() function is called, which records the current “time” property of the stopwatch and adds it to the lap array (StackUp, 2023).

REFERENCE
StackUp, C73_Q2 (Web Development with React II, Multiple Stopwatches (React)), 2023.
