import { useState } from "react";
import { auth } from "../api/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography, Container, Paper } from "@mui/material";
import { Typewriter } from 'react-simple-typewriter'

function TypeWriterTitle() {
  return(
    <Container 
    maxWidth="sm" 
    sx={{fontFamily: 'Kanit, san-serif', fontSize: '2rem', color: 'primary.text'}}>
      <h2>
      <Typewriter
        words={['New Experience', 'Join Us']}
        loop={true} // 是否循環播放
        cursor
        cursorStyle="_"
        typeSpeed={70} // 打字速度 (ms)
        deleteSpeed={50} // 刪除速度 (ms)
        delaySpeed={1000} // 文字顯示後停頓時間
      />
      </h2>
    </Container>
  )
}

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async(e) => {
    e.preventDefault();

    let newErrors = {};

    if (!email) newErrors.email = "請輸入 Email"
    if (!password) newErrors.password = "請輸入密碼"

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0
  ) {
      setErrors(newErrors);
      return; // 如果有錯誤，直接停止執行，返回
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/Home"); // 註冊成功後跳轉
    } catch (error) {
      if (error.code === "auth/user-not-found" || error.code === "auth/invalid-email") {
        setErrors({ email: "帳號不存在" });
      } else if (error.code === "auth/wrong-password") {
        setErrors({ password: "密碼錯誤" });
      } else {
        setErrors({ email: "登入失敗，請稍後再試" });
      }
    }
  };


  return (
    <Box sx={{background: 'linear-gradient(45deg, #0097a7 5%, #fa8e53 70%)'}}>
      <Container 
      maxWidth="lg" 
      sx={{ display: "flex", justifyContent: {xs: 'center', md: "flex-start"}, alignItems: "center", height: {xs: 'calc(100vh - 56px)',   sm: 'calc(100vh - 64px)'}}}>
        <Box sx={{ display: {xs: 'none', md: 'flex'}, flex: '0.8'}}>
          <TypeWriterTitle />
        </Box>
        <Paper 
        elevation={8}
        sx={{ backgroundColor: 'primary.light', padding: 8, textAlign: "center", borderRadius: 4}}>
          <Typography variant="h5" gutterBottom>
            登入
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <TextField
              label="Email"
              variant='outlined'
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              label="密碼"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
            />
            <Button type="submit" variant="contained" sx={{backgroundColor: 'secondary.dark'}} fullWidth>
              登入
            </Button>
            <Link 
              to={'/register'}
              style={{color: '#fff', textDecoration: "none" }}>
            <Button type="file" variant="contained" sx={{backgroundColor: 'secondary.main'}} fullWidth>
              註冊
            </Button>
            </Link>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Login;