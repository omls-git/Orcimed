import { useEffect, useState } from "react";
import { Container, useScrollTrigger} from "@mui/material";
import { motion } from "framer-motion";
import definesUs from '../images/definesusimg.png'

const WhatDefinesUs = () => {
  const [isInView, setIsInView] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 200 });

  useEffect(() => {
    if (trigger) setIsInView(true);
  }, [trigger]);

  return (
      <Container sx={{ position: "relative", overflow: "hidden" ,pt: 5}}>
        <motion.img
          src={definesUs}
          alt="What Defines Us"
          initial={{ y: 500, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 500, opacity: 0 }}
          transition={{ duration: 4, ease: "easeOut" }}
          style={{ width: "50%", maxWidth: "250px" }}
        />
      </Container>
  );
};

export default WhatDefinesUs;