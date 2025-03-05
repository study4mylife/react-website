import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid2';
import { Box, Button, Typography, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { PuffLoader } from "react-spinners";
import FetchGamesData from '../api/RAWG';
import PropTypes from 'prop-types';

function MediaCard({ background_image, name }) {
  return (
    <Card sx={{ width: "100%", maxWidth: "300px" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={background_image}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This is a game description placeholder.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">More Info</Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  background_image: PropTypes.string.isRequired, // 確保它是必填的字串
  name: PropTypes.string.isRequired, // 確保 name 也是必填字串
};

function GameCards() {
  const [gameData, setGameData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  // 監聽 page 改變並加載數據
  const loadMoreGames = async () => {
    if (loading) return; // 防止多次點擊加載
    setLoading(true); // 開啟加載狀態
    try {
      const data = await FetchGamesData(page);
      if (data.length === 0) {
        setHasMore(false); // 如果沒有更多數據，則設置 hasMore 為 false
      } else {
        setGameData((prev) => [...prev, ...data]); // 累加新數據
      }
      setPage((prev) => prev + 1); // 頁數加一
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // 關閉加載狀態
    }
  };

  return (
  <>
    <Box sx={{backgroundColor: "primary.main"}}>
    <Typography variant='h2'> Games </Typography>
        <Grid 
          container 
          justifyContent="center"
        >
          {
            gameData.map((game) => (
              <Grid 
                item
                size={{xs: 12, sm: 6, md: 4, lg: 3}}
                key={game.id} 
                display="flex"
                justifyContent="space-evenly"
                sx={{ my: 2 }} // 設定上下margin
              >
                <MediaCard background_image={game.background_image} name={game.name} />
              </Grid>
            ))}
        </Grid>

        {hasMore && (
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Button 
          variant="contained" 
          color="primary" 
          onClick={loadMoreGames} // 將 onClick 和 disabled 分開寫
          disabled={loading} // disabled 應該放在這裡
>
            {loading ? <PuffLoader color="#36d7b7" size={60} /> : '加載更多'}
          </Button>
        </Box>
      )}

      {!hasMore && (
        <Typography textAlign="center" sx={{ mt: 2 }}>已經到底了！</Typography>
      )}
    </Box>
  </>
  );
}

export default GameCards;
