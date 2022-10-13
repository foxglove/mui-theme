// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { Stack, Typography, useTheme } from "@mui/material";

export default {
  title: "theme/Palette",
};

export function Palette(): JSX.Element {
  const theme = useTheme();
  return (
    <Stack
      flexWrap="wrap"
      padding={2}
      gap={2}
      overflow="auto"
      height="100%"
      width="100%"
      bgcolor="background.paper"
    >
      <Typography variant="overline">Palette</Typography>
      <Stack gap={1}>
        <Stack direction="row" alignItems="center" gap={1}>
          {["dark", "main", "light"].map((variant) => (
            <Stack key={variant} width={32} alignItems="center" justifyContent="center">
              {variant}
            </Stack>
          ))}
        </Stack>
        {["primary", "secondary", "error", "warning", "info", "success"].map((color) => (
          <Stack key={color} direction="row" alignItems="center" gap={1}>
            {["dark", "main", "light"].map((variant) => (
              <Stack
                key={`${color}.${variant}`}
                width={32}
                height={32}
                bgcolor={`${color}.${variant}`}
                color={`${color}.contrastText`}
                alignItems="center"
                justifyContent="center"
              >
                Aa
              </Stack>
            ))}
            {color}
          </Stack>
        ))}
      </Stack>

      <Typography variant="overline">Background</Typography>
      <Stack gap={1}>
        {Object.keys(theme.palette.background).map((bgcolor) => (
          <Stack key={bgcolor} direction="row" alignItems="center" gap={1}>
            <Stack
              width={32}
              height={32}
              bgcolor={`background.${bgcolor}`}
              alignItems="center"
              justifyContent="center"
              border="1px solid"
              borderColor="divider"
            >
              Aa
            </Stack>
            <Stack
              width={32}
              height={32}
              bgcolor={`background.${bgcolor}`}
              alignItems="center"
              justifyContent="center"
              boxShadow={8}
            >
              Aa
            </Stack>
            {bgcolor}
          </Stack>
        ))}
      </Stack>

      <Typography variant="overline">Grey (with Divider border)</Typography>
      <Stack gap={1} direction="row" alignItems="center">
        {Object.keys(theme.palette.grey).map((key) => (
          <Stack key={key} alignItems="center" gap={1}>
            <Stack
              width={32}
              height={32}
              bgcolor={`grey.${key}`}
              alignItems="center"
              justifyContent="center"
              border="1px solid"
              borderColor="divider"
            >
              Aa
            </Stack>
            {key}
          </Stack>
        ))}
      </Stack>

      <Typography variant="overline">Action</Typography>
      <Stack gap={1}>
        {["hover", "focus", "selected", "disabled", "active"].map((color) => (
          <Stack direction="row" key={color} alignItems="center" gap={1}>
            <Stack
              width={32}
              height={32}
              bgcolor={`action.${color}`}
              alignItems="center"
              justifyContent="center"
            >
              Aa
            </Stack>
            {color}
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}