const mongoose = require("mongoose");

const RegisterAdmin = mongoose.Schema(
   {
      name: {
         type: String,
         require: [true, "No Name provided"],
      },

      email: {
         type: String,
         require: [true, "No Email provided"],
      },

      password: {
         type: String,
         require: [true, "No Password provided"],
      },

      superAdmin: {
         type: Boolean,
         default: false,
      }
   },
   {
      timestamps: true,
   }
);

module.exports = mongoose.model("Admin", RegisterAdmin);
