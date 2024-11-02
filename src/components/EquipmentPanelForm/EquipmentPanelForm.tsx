import React, { useState } from 'react';
import {
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';

import SearchIcon from '../../icons/SearchIcon';
import styles from './EquipmentPanelForm.module.scss';
import ListIcon from '../../icons/ListIcon';

const EquipmentPanelForm = () => {
  const [selectValue, setSelectValue] = useState<string>('1');

  const selectHandler = (e: SelectChangeEvent) => {
    console.log(e.target.value);
    setSelectValue(e.target.value);
  };
  ``;
  return (
    <FormControl className={styles.EquipmentPanelForm}>
      {/* TODO: Переделать на собственный Input */}
      <TextField
        placeholder={'Поиск по названию'}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position={'start'}>
                <SearchIcon />
              </InputAdornment>
            ),
            type: 'search',
            size: 'small',
            sx: { height: '32px' },
          },
        }}
      />
      <div className={styles.EquipmentPanelForm_selectWrapper}>
        <Select
          className={styles.EquipmentPanelForm_select}
          value={selectValue}
          onChange={selectHandler}
          autoWidth={false}
        >
          <MenuItem value={'1'}>Показать все</MenuItem>
          <MenuItem value={'2'}>Элементарные операции</MenuItem>
          <MenuItem value={'3'}>Динамическое оборудование</MenuItem>
          <MenuItem value={'4'}>Сепарационное оборудование</MenuItem>
          <MenuItem value={'5'}>Колонное оборудование</MenuItem>
          <MenuItem value={'6'}>Гидравлический расчет</MenuItem>
        </Select>
        <div className={styles.EquipmentPanelForm_listIconWrapper}>
          <ListIcon />
        </div>
      </div>
    </FormControl>
  );
};

export default EquipmentPanelForm;
