'use client';
import React, { useState } from 'react';
import Select from 'react-select';

export default function SelectInput({ className, options, onChange }) {

  return (
    <select
      className={className}
      onChange={onChange}
    >
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}