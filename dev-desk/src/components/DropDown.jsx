import './styles/DropDown.css';
import {
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from "@chakra-ui/react";

const LANGUAGE_VERSIONS = {
    javascript: "18.15.0",
    typescript: "5.0.3",
    python: "3.10.0",
    java: "15.0.2",
    csharp: "6.12.0",
    php: "8.2.3",
};
var languages = Object.entries(LANGUAGE_VERSIONS);

export default function DropDown({ onSelect = {}, language = 'javascript' }) {
    return (
        <Menu isLazy>
            <MenuButton as={Button} className='select'>
                <Text as="span" color="var(--primary-color)" >
                    {language}
                </Text>
                <Text as="span" color="var(--text-light)">
                    ({LANGUAGE_VERSIONS[language]})
                </Text>
            </MenuButton>
            <MenuList className='menu-list'>
                {languages.map(([lang, version]) => (
                    <MenuItem
                        key={lang}
                        color={lang === language ? "var(--primary-color)" : "var(--text-color)"}
                        bg={lang === language ? "var(--background-light)" : "var(--background-color)"}
                        _hover={{
                            color: "var(--primary-color)",
                            bg: "var(--background-light)",
                        }}
                        onClick={() => onSelect(lang)}
                        className='menu-item'
                    >
                        {lang}
                        <Text as="span" color="var(--text-light)">
                            ({version})
                        </Text>
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}