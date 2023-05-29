// import multer from "multer";
// import mkdirp from "mkdirp";
// import path from "path";

// // Create the multer upload middleware
// const upload = multer({
//   storage: multer.diskStorage({
//     // Set the destination folder where uploaded files will be stored
//     destination: path.join(__dirname, "../../public/uploads/"), // Use an absolute path
//     filename: function (req, file, cb) {
//       // Set the filename to be unique or use any custom logic
//       const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//       cb(null, file.fieldname + "-" + uniqueSuffix);
//     },
//   }),
// });

// // Ensure the destination folder exists
// mkdirp.sync(path.join(__dirname, "../../public/uploads/"));

// export default upload;
