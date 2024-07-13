import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const TaskStatusDropdown = (taskStatusId, statuses, setStatusId) => {
  return (
    <>
      <FormControl fullWidth sx={{ marginTop: "25px" }}>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          id="demo-select-small"
          value={taskStatusId}
          label="Status"
          onChange={(e) => setStatusId(e.target.value)}
        >
          {Object.keys(statuses).map((item, i) => {
            return (
              <MenuItem value={statuses[i].id} key={statuses[i].id}>
                {statuses[i].status}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
};
