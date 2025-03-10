import { motion } from 'framer-motion';

const Section = ({ id, children }) => (
  <motion.div
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="min-h-screen flex items-center justify-center"
  >
    {children}
  </motion.div>
);

export default Section;