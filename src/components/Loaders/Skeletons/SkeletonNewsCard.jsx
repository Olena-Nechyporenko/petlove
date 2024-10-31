import Skeleton from '@mui/material/Skeleton';
import { Box } from '@mui/material';

export const SkeletonNewsCard = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '350px',
        margin: '0 auto',
        flexBasis: 'calc((100% - 24px) / 2)',
      }}
    >
      <Skeleton
        variant="rectangular"
        width="100%"
        height={200}
        animation="wave"
        sx={{ borderRadius: '15px', marginBottom: '12px' }}
      />

      <Skeleton variant="text" width="100%" animation="wave" sx={{ height: '35px' }} />

      <Box sx={{ pt: 2 }}>
        <Skeleton variant="text" width="100%" animation="wave" />
        <Skeleton variant="text" width="100%" animation="wave" />
        <Skeleton variant="text" width="60%" animation="wave" />
      </Box>
    </Box>
  );
};
