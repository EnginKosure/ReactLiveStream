import React, { useState } from 'react';
import CountrySelect from 'react-bootstrap-country-select';

const SelectCountry = () => {

    const [value, setValue] = useState('be');

    return (
        <>
            <h6 className="text-fields">Select Country</h6>
            <CountrySelect
                value={value}
                onChange={setValue}
                valueAs='id'
                // flush={false}
                // countryLabelFormatter={country => `${country.name} (${country.alpha2})`}
                formControlProps={{
                    name: "CountryName",
                    className: "form-control email text-fields",
                    onKeyPress: (e) => { e.key === 'Enter' && e.preventDefault(); }
                }}
                classPrefix='country-select'
            />
        </>
    );

};
export default SelectCountry