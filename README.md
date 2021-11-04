# Interview Scheduler

Interview Scheduler is an extremely useful app for booking appointments with interviewers! 

For each day of the week prospective interviewees can see how many available spots are left just by looking at the sidebar. Days filled to capacity will render a lower transparency in the sidebar. After selecting a day, users will be greeted with time blocks, from 12pm to 5pm, displaying either a "+" icon to indicate an available spot or an occupied booking which will display the student's name and interviewer. Occupied spots can be edited (to change the name or interviewer) or deleted (to cancel an appointment). But don't worry before a cancellation can take place the app will confirm with the user so no mishaps take place!

Some additional functionalities include not being able to book an appointment without typing a name or interviewer and appropriate error messages if anything goes wrong with a booking or cancellation.

With Interview Scheduler both students and interviewers can rest assure appointment booking will be a smooth process!

This project makes use of React, JSX, Axios, SASS, SQL, Node and Express.
For testing Storybook, Jest and Cypress were used.

Booking Appointments Form:
!["Booking Appointments Form:"](https://github.com/ShannaJSmith/scheduler/blob/master/docs/BookingAppointmentForm.png?raw=true)

Warning Message For Submitting Without A Name:
!["Warning Message For Submitting Without A Name:"](https://github.com/ShannaJSmith/scheduler/blob/master/docs/SubmitWithoutName.png?raw=true)

Cancel Confirmation:
!["Cancel Confirmation:"](https://github.com/ShannaJSmith/scheduler/blob/master/docs/CancelConfirmation.png?raw=true)

Error Messages:
!["Error Messages:"](https://github.com/ShannaJSmith/scheduler/blob/master/docs/ErrorMsgs.png?raw=true)

## Setup
Install dependencies with `npm install`.

Run Webpack Development Server with `npm start`.

Run Jest Test Framework with `npm test`.

Run Storybook Visual Testbed with `npm run storybook`.

Run Cypress Visual Tests with `npm run cypress`.

