import React, { useState } from 'react';
import CountrySelect from 'react-bootstrap-country-select';

const SelectCountry = () => {

    const [value, setValue] = useState(null);

    return (
        <CountrySelect
            value={value}
            onChange={setValue}
        />
    );

};
export default SelectCountry