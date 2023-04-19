import { Box, Button } from '@mui/material';
import React, { useState } from 'react';

function Popup(content: JSX.Element, btnText: string): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        className="btn"
        onClick={(): void => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? 'Close' : btnText}
      </Button>

      {isOpen && (
        <Box>
          <Box> {content} </Box>
        </Box>
      )}
    </>
  );
}
export default Popup;
