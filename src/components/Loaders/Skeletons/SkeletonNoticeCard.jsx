import Skeleton from '@mui/material/Skeleton';
import { Box } from '@mui/material';

export const SkeletonNoticeCard = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '360px',
        height: '470px',
        padding: '24px',
        borderRadius: '15px',
        backgroundColor: '#ededed',
        boxSizing: 'border-box',
        flexBasis: 'calc((100% - 20px) / 2)',
      }}
    >
      <Skeleton
        variant="rectangular"
        width="100%"
        height={175}
        animation="wave"
        sx={{ borderRadius: '15px', marginBottom: '24px' }}
      />

      <Skeleton variant="text" width="60%" animation="wave" sx={{ height: '35px' }} />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
        <Skeleton variant="text" animation="wave" width="16%" height="40px" />
        <Skeleton variant="text" animation="wave" width="16%" height="40px" />
        <Skeleton variant="text" animation="wave" width="16%" height="40px" />
        <Skeleton variant="text" animation="wave" width="16%" height="40px" />
        <Skeleton variant="text" animation="wave" width="16%" height="40px" />
      </Box>

      <Skeleton variant="text" width="100%" animation="wave" sx={{ marginBottom: '50px' }} />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', height: '48px' }}>
        <Skeleton variant="rectangular" width="80%" height="100%" animation="wave" sx={{ borderRadius: '30px' }} />
        <Skeleton variant="circular" width={48} height={48} animation="wave" />
      </Box>
    </Box>
  );
};
