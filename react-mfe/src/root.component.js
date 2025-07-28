import Navbar from './components/Navbar';
import Box from '@mui/material/Box';
import { SharedMfe } from '@dev/shared-mfe';
import { SharedButton } from '@dev/shared-mfe';

export default function Root(props) {
  return (
    <>
      <Navbar />
      <Box sx={{ p: 2 }}>
        <section>
          React APP is mounted!
          <br />
          This is the content area.
        </section>
      </Box>
      <Box>
        <h1>Shared Mfe</h1>
        <SharedMfe />
        <SharedButton>Click Me</SharedButton>
      </Box>
    </>
  );
}
