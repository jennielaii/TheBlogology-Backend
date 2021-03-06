const express = require('express');
const app = express();
const routesReport = require('rowdy-logger').begin(app);

app.use(require('morgan')('tiny'));
app.use(express.json());
app.use(require('cors')());

const blogpostRoutes = require('./routes/postRoute')
app.use('/post', blogpostRoutes)

const userRoutes = require('./routes/userRoute')
app.use('/user', userRoutes)


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('server listening on ${PORT}');
    routesReport.print()
});