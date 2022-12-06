import formstyles from '@/styles/form.module.css'
import { motion } from 'framer-motion'

const NotFound = ({ placeholder }) => {
  return (
    <motion.div layout="position" className={formstyles.notFound}>
      <h3>Hi.</h3>
      <p>
        Sorry, this does not exist yet.
        <br />
        <cite></cite>
      </p>
    </motion.div>
  )
}

export default NotFound
