import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

app.listen(5001, () => (
  console.log("Server is running on port: 5001")
));