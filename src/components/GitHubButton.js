import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const EnlargeOnHoverButton = styled(Button)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  transition: "transform 500ms ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
    borderColor: "rgb(219, 39, 119)",
  },
}));

function GitHubButton() {
  const github = "https://github.com/misaelucas";

  return (
    <EnlargeOnHoverButton
      href={github}
      target="_blank"
      rel="noreferrer"
      variant="outlined"
      size="large"
      sx={{
        width: 150,
        fontFamily: "monospace",
        fontSize: "1.10rem",
        color: "rgb(219, 39, 119)",
        borderColor: "rgb(219, 39, 119)",
      }}
    >
      Github
    </EnlargeOnHoverButton>
  );
}

export default GitHubButton;
