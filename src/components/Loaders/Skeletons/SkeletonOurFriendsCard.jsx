import Skeleton from '@mui/material/Skeleton';
import { Box } from '@mui/material';

export const SkeletonOurFriendsCard = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '190px',
        maxWidth: '360px',
        backgroundColor: '#ededed',
        borderRadius: '15px',
        flexBasis: 'calc((100% - 20px) / 2)',
      }}
    >
      <Skeleton variant="circular" width={90} height={90} animation="wave" sx={{ margin: '0 20px' }} />

      <Box sx={{ width: 'calc(100% - 130px)' }}>
        <Skeleton variant="text" width="50%" animation="wave" sx={{ height: '35px', marginBottom: '20px' }} />

        <Skeleton variant="text" width="80%" animation="wave" />
        <Skeleton variant="text" width="80%" animation="wave" />
        <Skeleton variant="text" width="80%" animation="wave" />
      </Box>
    </Box>
  );
};
