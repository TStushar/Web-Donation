import React from "react";
import { useForm } from "react-hook-form";
import "./DonationForm.css";

const DonationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="container">
      <form id="donationForm" onSubmit={handleSubmit(onSubmit)}>
        <span>Donate Now</span>
        <div className="donation-amounts">
          <button type="button">Donate 5001</button>
          <button type="button">Donate 10001</button>
          <button type="button">Donate 15001</button>
          <button type="button">Donate 20001</button>
          <button type="button">Donate 25001</button>
          <button type="button">Donate 50001</button>
          <button type="button">Donate 75001</button>
          <button type="button">Donate 100001</button>
          <button type="button">Custom Amount</button>
        </div>
        <div className="personal-info">
          <h3>Personal Info</h3>

          <div className="InputRow">
            <div className="inputField">
              <label for="firstName">First Name *</label>
              <input
                type="text"
                {...register("firstName", { required: true })}
                placeholder="First Name"
              />
              {errors.firstName && <span>This field is required</span>}
            </div>
            <div className="inputField">
              <label for="firstName">Last Name *</label>
              <input
                type="text"
                {...register("lastName", { required: true })}
                placeholder="Last Name"
              />
              {errors.lastName && <span>This field is required</span>}
            </div>
          </div>

          <div className="InputRow">
            <div className="inputField">
              <label for="firstName">Eamil *</label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Email Address"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="inputField">
              <label for="firstName">Phone *</label>
              <input
                type="tel"
                {...register("phone", { required: true })}
                placeholder="Phone"
              />
              {errors.phone && <span>This field is required</span>}
            </div>
          </div>
        </div>
        <div className="billing-details">
          <h3>Billing Details</h3>
          <div className="InputRow">
            <div className="inputField">
              <label htmlFor="address1">Address 1 *</label>
              <input
                type="text"
                {...register("address1", { required: true })}
                placeholder="Address 1"
              />
              {errors.address1 && <span>This field is required</span>}
            </div>
            <div className="inputField">
              <label htmlFor="address2">Address 2</label>
              <input
                type="text"
                {...register("address2")}
                placeholder="Address 2"
              />
            </div>
          </div>
          <div className="InputRow">
            <div className="inputField">
              <label htmlFor="city">City *</label>
              <input
                type="text"
                {...register("city", { required: true })}
                placeholder="City"
              />
              {errors.city && <span>This field is required</span>}
            </div>
            <div className="inputField">
              <label htmlFor="state">State *</label>
              <input
                type="text"
                {...register("state", { required: true })}
                placeholder="State"
              />
              {errors.state && <span>This field is required</span>}
            </div>
          </div>
          <div className="InputRow">
            <div className="inputField">
              <label htmlFor="zip">Zip / Postal Code *</label>
              <input
                type="text"
                {...register("zip", { required: true })}
                placeholder="Zip / Postal Code"
              />
              {errors.zip && <span>This field is required</span>}
            </div>
            <div className="inputField">
              <label htmlFor="country">Country *</label>
              <input
                type="text"
                {...register("z", { required: true })}
                placeholder="Country-India"
              />
              {errors.z && <span>This field is required</span>}
            </div>
          </div>
        </div>
        <div className="total">
          <p>Donation Total: ₹20,001.00</p>
        </div>
        <button type="submit">Donate Now</button>
      </form>
    </div>
  );
};

export default DonationForm;
