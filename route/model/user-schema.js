import Mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
import validator from "validator";

const userSchema = Mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
      trim: true,
    },

    username: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new error("Email is inValid");
        }
      },
    },
    phone: {
      type: Number,
      required: true,
      index: true,
      unique: true,
      minlength: 10,
    },

    city: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 7,
    },
  },
  {
    timestamps: true,
  }
);

autoIncrement.initialize(Mongoose.connection);
userSchema.plugin(autoIncrement.plugin, "user");

const user = Mongoose.model("user", userSchema);

export default user;
