import React from "react";
import { motion } from "framer-motion";

const HappyGardeners = () => {
  return (
    <section className="my-24 bg-green-100 rounded-xl">
      <h3 className="text-4xl md:text-5xl font-bold text-green-700 text-center py-10">
        What Plant Lovers Say 🌿
      </h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-10 lg:px-20 pb-16">
        {/* Gardener 1 */}
        <motion.div
          className="card bg-base-100 shadow-xl p-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <div className="avatar">
              <div className="ring-success ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src="https://i.ibb.co/LD0Nv6J1/portrait-lawyer-and-black-woman-with-tablet-smile-and-happy-in-office-workplace-african.jpg" alt="Ayesha Rahman" />
              </div>
            </div>
          </div>
          <div className="card-body text-center space-y-4">
            <p>
              Tracking my plants' watering schedule is now super simple. This app truly made plant parenting stress-free!
            </p>
            <div className="rating justify-center">
              {[...Array(5)].map((_, i) => (
                <input key={i} type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" defaultChecked readOnly />
              ))}
            </div>
            <h6 className="font-bold text-green-700">Ayesha Rahman</h6>
            <p>Indoor Plant Enthusiast</p>
          </div>
        </motion.div>

        {/* Gardener 2 */}
        <motion.div
          className="card bg-base-100 shadow-xl p-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <div className="avatar">
              <div className="ring-success ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src="https://i.ibb.co.com/Z6JStKWQ/successful-mature-businessman-looking-at-camera-with-confidence.jpg" alt="Rafiq Hossain" />
              </div>
            </div>
          </div>
          <div className="card-body text-center space-y-4">
            <p>
              I manage a garden at my school, and Plant Tracker helps me remember which plants need care every day!
            </p>
            <div className="rating justify-center">
              {[...Array(5)].map((_, i) => (
                <input key={i} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked readOnly />
              ))}
            </div>
            <h6 className="font-bold text-green-700">Rafiq Hossain</h6>
            <p>Botany Teacher</p>
          </div>
        </motion.div>

        {/* Gardener 3 */}
        <motion.div
          className="card bg-base-100 shadow-xl p-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <div className="avatar">
              <div className="ring-success ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src="https://i.ibb.co.com/NdBqLsc3/a-secretary-is-sitting-at-the-office-and-makes-an-appointment-while-talking-on-the-phone-with.jpg" alt="Maya Das" />
              </div>
            </div>
          </div>
          <div className="card-body text-center space-y-4">
            <p>
              The clean UI and watering reminders are just amazing. It feels like my plants are talking to me!
            </p>
            <div className="rating justify-center">
              {[...Array(5)].map((_, i) => (
                <input key={i} type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" defaultChecked readOnly />
              ))}
            </div>
            <h6 className="font-bold text-green-700">Maya Das</h6>
            <p>Nature Lover</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HappyGardeners;
