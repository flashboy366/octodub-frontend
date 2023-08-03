import { extendTheme } from "@chakra-ui/theme-utils";

export const theme = extendTheme({
    colors: {
        brand: {
            100: '#2F0D4F',
            200: '#41126e',
            300: '#5b199a',
        },
        white: {
            100: '#FFFFFF',
        },
        gray: {
            100: '#D1D1D1',
            200: '#D3D3D3',
            300: '#55534E',
            400: '#FCFCFC',
        },
        background: {
            100: '#E2E6EF',
        },
        accent: {
            100: '#FD2097',
        },
        black: {
            100: '#000000',
        },
    },
    fonts: {
        jakarta: `'Plus Jakarta Sans', sans-serif`,
        mukta: `'Mukta', sans-serif`,
        raleway: `'Raleway', sans-serif`,
    },
    styles: {
        global: {
            option: {
                background: "white",
            },
            body: {
                bg: "background.100"
            },
        },
    },
    components: {
        Button: {
            sizes: {
                md: {
                    fontSize: "14px",
                }
            },
            variants: {
                'action': {
                    bg: "brand.100",
                    _hover: {bg: 'brand.200'},
                    _active: {bg: 'brand.300'},
                    color: "white.100",
                    borderRadius: "11px",
                }
            }
        },
        Select: {
            baseStyle: {
                field: {
                    borderRadius: "11px",
                    fontSize: '13px',
                    color: 'gray.300',
                },
                icon: {
                    boxSize: 4,
                    color: 'gray.300',
                },
            },
            defaultProps: {
                size: "sm",
            },
        },
    },
})