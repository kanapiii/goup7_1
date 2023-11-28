import "../Style/Chishiki.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Chishiki() {
  return (
    <div className="Chishiki">
      <h1>睡眠に関する知識</h1>
      <div className="box">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "70ch"}
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-multiline-static"
              label=""
              multiline
              rows={4}
              defaultValue="aa"
              InputProps={{ readOnly: true }}
            />
          </div>
        </Box>
      </div>
    </div>
  );
}

export default Chishiki;