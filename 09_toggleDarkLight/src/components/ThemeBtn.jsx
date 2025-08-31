import React from 'react' 
import useTheme from '../context/Theme';

export default function ThemeBtn() {
    const {themeMode, lightTheme, darkTheme} = useTheme()
    const onChangeBtn = (e) => {
        // Checks if checkbox is checked (e.currentTarget.checked)
        // If checked → calls darkTheme()
        // If unchecked → calls lightTheme()
        const darkModeStatus = e.currentTarget.checked // what it is doing
//         Why e.currentTarget.checked is true?
        // Because the user is clicking to check the checkbox! The checkbox was false (unchecked), and the user's click action is turning it ON, so e.currentTarget.checked becomes true.
        if(darkModeStatus){
            darkTheme()
        }
        else{
            lightTheme()
        }
    }
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer" //sr-only class hides the actual checkbox for accessibility
                onChange={onChangeBtn}
                checked = {themeMode === 'dark'} // what is this
                //This line creates a controlled component - meaning React controls the checkbox's state rather than the DOM managing it internally.
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );
}

