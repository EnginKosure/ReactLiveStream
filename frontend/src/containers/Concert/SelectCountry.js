import React, { useState } from 'react';
import CountrySelect from 'react-bootstrap-country-select';

const SelectCountry = () => {

    const [value, setValue] = useState('be');

    return (
        <div style={{ marginBottom: "10px" }}>
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
        </div>
    );

};
export default SelectCountry