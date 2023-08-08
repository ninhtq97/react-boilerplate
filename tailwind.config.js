const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{jsx,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#000000',
          2: '#29333B',
        },
        blue: {
          1: '#176CDD',
          4: '#4289DE',
        },
        gray: {
          6: '#687188',
          7: '#767C81',
          8: '#828282',
          10: '#AAADB1',
          11: '#B3B3B3',
          13: '#D3D6DA',
          14: '#EBEBEB',
          15: {
            2: '#F2F2F2',
            3: '#F3F7FE',
            7: '#F7F7F7',
            8: '#F8FAFF',
          },
        },
        green: {
          0: {
            DEFAULT: '#0FB77A',
            7: '#07AF17',
          },
          1: '#1DC3C3',
          4: '#45B88D',
          5: {
            DEFAULT: '#52D1A3',
            14: '#5EA54C',
          },
          6: '#6AB59A',
          7: '#78DEB9',
          14: '#E7F8F2',
        },
        yellow: {
          14: '#E2BA38',
        },
        orange: {
          14: '#E69E5A',
          15: '#F89707',
        },
        pink: {
          13: '#DC39D5',
        },
        purple: {
          8: '#815CD1',
          9: '#9156DA',
          10: {
            6: '#A663C6',
            7: '#A749DE',
          },
        },
        red: {
          13: '#DA615C',
          15: '#F01919',
        },
      },
      screens: {
        xs: '480px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1536px',
      },
      container: {
        center: true,
        screens: {},
        padding: {
          DEFAULT: '1rem',
        },
      },
      textColor: {},
      fontFamily: {},
      display: {
        none: 'none',
        block: 'block',
        table: 'table',
        flex: 'flex',
        grid: 'grid',
      },
      position: {
        top: 'top',
        bottom: 'bottom',
        left: 'left',
        right: 'right',
        center: 'center',
      },
      borderColor: {
        DEFAULT: '#EAEBED',
      },
      backgroundImage: {},
      backgroundSize: {
        full: '100%',
      },
      keyframes: {
        'spinners-before': {
          '0%': {
            width: '10px',
            boxShadow:
              'rgba(54, 215, 183, 0.75) 20px -10px, rgba(54, 215, 183, 0.75) -20px 10px',
          },
          '35%': {
            width: '50px',
            boxShadow:
              'rgba(54, 215, 183, 0.75) 0px -10px, rgba(54, 215, 183, 0.75) 0px 10px',
          },
          '70%': {
            width: '10px',
            boxShadow:
              'rgba(54, 215, 183, 0.75) -20px -10px, rgba(54, 215, 183, 0.75) 20px 10px',
          },
          '100%': {
            boxShadow:
              'rgba(54, 215, 183, 0.75) 20px -10px, rgba(54, 215, 183, 0.75) -20px 10px',
          },
        },

        'spinners-after': {
          '0%': {
            height: '10px',
            boxShadow:
              'rgb(54, 215, 183) 10px 20px, rgb(54, 215, 183) -10px -20px',
          },
          '35%': {
            height: '50px',
            boxShadow:
              'rgb(54, 215, 183) 10px 0px, rgb(54, 215, 183) -10px 0px',
          },
          '70%': {
            height: '10px',
            boxShadow:
              'rgb(54, 215, 183) 10px -20px, rgb(54, 215, 183) -10px 20px',
          },
          '100%': {
            boxShadow:
              'rgb(54, 215, 183) 10px 20px, rgb(54, 215, 183) -10px -20px',
          },
        },
      },
      animation: {
        'spinners-before':
          '2s ease 0s infinite normal none running spinners-before',
        'spinners-after':
          '2s ease 0s infinite normal none running spinners-after',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          '&:not(.fluid)': {
            '@screen sm': {
              maxWidth: '540px',
            },
            '@screen md': {
              maxWidth: '720px',
            },
            '@screen lg': {
              maxWidth: '960px',
            },
            '@screen xl': {
              maxWidth: '1202px',
            },
          },
        },

        '.modal': {
          position: 'fixed',
          inset: `${theme('translate.0')} ${theme('translate.0')}`,
          overflow: 'auto',
          zIndex: '999',

          '&-overlay': {
            display: theme('display.flex'),
            alignItems: theme('position.center'),
            justifyContent: theme('position.center'),
            minHeight: theme('height.full'),
            background: 'rgba(5,5,27,.6)',
            padding: `0 ${theme('spacing.3')}`,
          },

          '&-container': {
            position: 'relative',
            margin: `${theme('spacing.8')} auto`,
            width: theme('width.full'),
            backgroundColor: theme('colors.white'),
            borderRadius: theme('borderRadius.lg'),
          },

          '&-close': {
            color: theme('colors.gray.7'),
            width: theme('width.6'),
            height: theme('height.6'),
            zIndex: 1,
          },

          '&-header': {
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            padding: theme('spacing.3'),
            borderBottomWidth: '1px',

            '@screen md': {
              padding: `${theme('spacing.4')} ${theme('spacing.3')} ${theme(
                'spacing.3',
              )} ${theme('spacing.5')}`,
            },
          },

          '&-content': {
            position: 'relative',
            padding: theme('spacing.3'),

            '@screen md': {
              padding: `${theme('spacing.4')} ${theme('spacing.5')} ${theme(
                'spacing.8',
              )}`,
            },
          },

          '&-footer': {
            position: 'relative',
          },
        },

        '.tbl-wrapper': {
          position: 'relative',
          overflowX: 'auto',
          width: theme('width.full'),
          borderWidth: '1px',
          borderRadius: '8px',
        },

        'table.tbl': {
          width: theme('width.full'),

          'th, td': {
            fontSize: '15px',
            lineHeight: '22px',
          },

          thead: {
            tr: {
              fontWeight: theme('fontWeight.semibold'),
              fontSize: '15px',
              lineHeight: theme('lineHeight.5'),
            },

            th: {
              backgroundColor: theme('colors.gray.15.3'),
              padding: `${theme('spacing.3')} ${theme('spacing.4')}`,
              whiteSpace: 'nowrap',

              '&:first-child': {
                paddingLeft: theme('spacing.4'),
              },

              '&:last-child': {
                paddingRight: theme('spacing.4'),
              },
            },
          },

          tbody: {
            tr: {
              position: 'relative',
              transition: '.5s',
              zIndex: 0,

              '&:nth-child(even)': {
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%,-50%)',
                  width: 'calc(100% - 16px)',
                  height: '100%',
                  backgroundColor: theme('colors.gray.15.7'),
                  borderRadius: '4px',
                  zIndex: '-1',
                },
              },
            },

            td: {
              padding: `10.5px ${theme('spacing.4')}`,
              whiteSpace: 'nowrap',
              userSelect: 'text',
            },
          },

          '&-notification': {
            tbody: {
              td: {
                maxWidth: '300px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              },
            },
          },

          '&-decentralization': {
            'th,td': {
              borderBottomWidth: '1px',

              '&:not(:first-child)': {
                borderLeftWidth: '1px',
              },
            },

            thead: {
              th: {
                textAlign: 'center',
                backgroundColor: theme('colors.gray.15.7'),
              },
            },

            tbody: {
              tr: {
                '&:nth-child(even)': {
                  td: {
                    backgroundColor: theme('colors.gray.15.7'),
                  },

                  '&::after': {
                    display: 'none',
                  },
                },
              },
              td: {
                position: 'relative',
                zIndex: '1',
              },
            },
          },
        },

        '.pagination': {
          position: 'relative',
          display: theme('display.flex'),
          alignItems: theme('position.center'),
          justifyContent: theme('position.center'),
          flexWrap: 'wrap',
          gap: theme('spacing.2'),
          zIndex: 1,

          '@screen lg': {
            justifyContent: 'space-between',
            flexWrap: 'nowrap',
          },

          '&-size': {
            display: theme('display.flex'),
            alignItems: theme('position.center'),
            gap: theme('spacing.3'),
            flex: theme('width.full'),
            justifyContent: theme('position.center'),

            '@screen lg': {
              justifyContent: 'flex-start',
              flex: 'auto',
            },

            '&__label': {
              color: theme('colors.gray.7'),
              fontSize: theme('fontSize.sm'),
              lineHeight: '21px',
            },

            '.select': {
              '&-container': {
                backgroundColor: theme('colors.gray.15.2'),
                fontSize: '15px',
                padding: `${theme('spacing.2')} ${theme('spacing.3')}`,
              },

              '&-values': {
                padding: '0 !important',
              },
            },
          },

          '&-container': {
            display: theme('display.flex'),
            alignItems: theme('position.center'),
            justifyContent: theme('position.center'),
            flexWrap: 'wrap',
            gap: theme('spacing.3'),
          },

          '&-item': {
            position: 'relative',
            display: theme('display.flex'),
            alignItems: theme('position.center'),
            justifyContent: theme('position.center'),
            width: theme('width.8'),
            height: theme('height.8'),
            fontSize: '15px',
            lineHeight: '22px',
            backgroundColor: theme('colors.gray.15.2'),
            borderRadius: theme('borderRadius.lg'),
            transition: theme('transitionDuration.200'),
            color: theme('colors.gray.7'),
            overflow: 'hidden',
            zIndex: theme('zIndex.0'),

            '&:not(&--active)': {
              cursor: theme('cursor.pointer'),
              pointerEvents: 'auto',

              '&:hover': {
                backgroundColor: theme('colors.green.0.DEFAULT'),
                color: theme('colors.white'),
              },
            },

            '&--active': {
              cursor: theme('cursor.default'),
              pointerEvents: 'none',
              backgroundColor: theme('colors.green.0.DEFAULT'),
              color: theme('colors.white'),
            },
          },
        },

        '.select': {
          position: 'relative',
          display: theme('display.flex'),
          flexDirection: 'column',
          gap: theme('spacing.1'),
          width: theme('width.full'),
          userSelect: 'none',
          cursor: theme('cursor.pointer'),
          transition: '.5s ease',

          '&:not(.multiple)': {
            '.select': {
              '&-value': {
                fontSize: '15px',
                lineHeight: '22px',
              },
            },
          },

          '&.multiple': {
            '.select': {
              '&-value': {
                cursor: 'pointer',
                padding: '0.5px 6px',
                borderRadius: theme('borderRadius.DEFAULT'),
                backgroundColor: theme('colors.gray.15.7'),

                '&__content': {
                  fontSize: '14px',
                  lineHeight: '21px',
                },
              },
            },
          },

          '&.disabled': {
            pointerEvents: 'none',
          },

          '&:not(.has-value)': {
            '.select': {
              '&-values': {
                padding: `${theme('spacing.5')} 0`,
              },
            },
          },

          '&.has-value': {
            '&.no-label': {
              '.select': {
                '&-values': {
                  padding: `9px 0`,
                },
              },
            },

            '&:not(.no-label)': {
              '.select': {
                '&-label': {
                  top: '0',
                  transform: 'unset',
                  fontSize: theme('fontSize.xs'),
                  lineHeight: '18px',
                },

                '&-values': {
                  padding: `${theme('spacing.4')} 0 ${theme('spacing.[0.5]')}`,
                },
              },
            },
          },

          '&-label': {
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            color: theme('colors.gray.10'),
            transition: '.5s ease',
            fontSize: '15px',
            lineHeight: '22px',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            maxWidth: theme('width.full'),
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          },

          '&-values': {
            display: theme('display.flex'),
            flexWrap: 'wrap',
            gap: theme('spacing.1'),
          },

          '&-value': {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: theme('spacing.2'),
            transition: '.25s ease',

            '&__content': {
              display: theme('display.flex'),
              alignItems: 'center',
              gap: theme('spacing.2'),
            },

            '&__remove': {},
          },

          '&-container': {
            display: theme('display.flex'),
            alignItems: theme('position.center'),
            justifyContent: theme('position.center'),
            gap: '6px',
            borderWidth: '1px',
            padding: `3px ${theme('spacing.2')}`,
            borderRadius: theme('borderRadius.DEFAULT'),
            background: theme('colors.white'),
            transition: '.5s ease',
          },

          '&-placeholder': {
            color: theme('colors.gray.10'),
            whiteSpace: 'nowrap',
            fontSize: '15px',
            lineHeight: '22px',
          },

          '&-dropdown': {
            display: theme('display.flex'),
            flexDirection: 'column',
            gap: theme('spacing.3'),

            '.options': {
              display: theme('display.flex'),
              flexDirection: 'column',
              maxHeight: theme('height.60'),
              overflow: 'auto',
            },

            '.option': {
              fontSize: theme('fontSize.base'),
              lineHeight: theme('lineHeight.6'),
              padding: `${theme('spacing.2')} 6px`,
              borderRadius: theme('borderRadius.DEFAULT'),
              cursor: theme('cursor.pointer'),
              transition: '.5s ease',
              backgroundColor: theme('colors.white'),

              '&:hover': {
                backgroundColor: 'rgba(15, 183, 122, 0.05)',

                '.option': {
                  '&-value': {
                    fontWeight: theme('fontWeight.medium'),
                    color: theme('colors.green.0.DEFAULT'),
                  },
                },
              },

              '&-value': {
                fontSize: '15px',
                lineHeight: '22px',
              },
            },
          },
        },

        '.ipt': {
          width: theme('width.full'),
          whiteSpace: 'nowrap',
        },

        '.form-field': {
          position: 'relative',
          display: theme('display.flex'),
          alignItems: 'center',
          justifyContent: 'space-between',
          width: theme('width.full'),
          gap: theme('spacing.1'),
          borderWidth: '1px',
          borderStyle: 'solid',
          borderRadius: theme('borderRadius.DEFAULT'),
          overflow: 'hidden',
          padding: `0 ${theme('spacing.2')}`,
          backgroundColor: theme('colors.white'),
          transition: '.25s ease',

          '&:focus-within': {
            borderColor: theme('colors.green.0.DEFAULT'),
          },

          '.label-field': {
            position: 'absolute',
            top: theme('translate.1/2'),
            left: theme('translate.0'),
            transform: `translateY(-${theme('translate.1/2')})`,
            fontSize: '15px',
            lineHeight: '22px',
            color: theme('colors.gray.10'),
            transition: 'all .2s ease',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            maxWidth: theme('width.full'),
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          },

          '&:not(.no-label)': {
            '.text-field': {
              '.ipt': {
                '&:focus': {
                  paddingTop: '19px',
                  paddingBottom: '3px',

                  '& ~ .label-field': {
                    fontSize: theme('fontSize.xs'),
                    top: '3px',
                    transform: 'translateY(0)',
                  },
                },
              },
            },
          },

          '.icon-field': {
            display: 'flex',
            gap: theme('spacing.1'),
            color: theme('colors.gray.10'),
          },

          '.text-field': {
            position: 'relative',
            display: theme('display.flex'),
            alignItems: theme('position.center'),
            gap: '2px',
            flex: '1',
            height: '100%',
            color: theme('colors.black.2'),
            cursor: 'text',

            '&__prefix': {
              marginTop: '19px',
              padding: '2px 6px',
              backgroundColor: theme('colors.gray.15.2'),
              borderRadius: '4px',
              fontSize: '12px',
              lineHeight: '18px',
              pointerEvents: 'none',
            },

            '.ipt': {
              fontSize: '15px',
              lineHeight: '22px',
              fontWeight: theme('fontWeight.sm'),
              padding: '11px 0',
              border: 'none',
              backgroundColor: theme('colors.transparent'),
              outline: 'none',
              color: 'currentColor',
              textAlign: 'inherit',
              transition: 'all .2s ease',
              minHeight: '46px',
              resize: 'none',

              '&::placehoder': {
                color: theme('colors.gray.10'),
              },
            },
          },

          '&.has-value': {
            '.label-field': {
              fontSize: theme('fontSize.xs'),
              top: '3px',
              transform: 'translateY(0)',
            },

            '&:not(.no-label)': {
              '.ipt': {
                paddingTop: '19px',
                paddingBottom: '3px',
              },
            },
          },

          '&.disabled': {
            backgroundColor: theme('colors.gray.15.2'),

            '.ipt': {
              cursor: 'default',
            },
          },
        },

        '.form-file': {
          display: 'flex',
          flexDirection: 'column',
          gap: theme('spacing.1'),
          width: theme('width.full'),
          height: theme('height.full'),

          '&:not(.disabled)': {
            '.file-container': {
              cursor: 'pointer',
              border: `1px dashed ${theme('colors.green.0.DEFAULT')}`,
            },
          },

          '.file-container': {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px',
            overflow: 'hidden',
            padding: '14px 18px',
            height: theme('height.full'),
          },

          '.file-field': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            pointerEvents: 'none',
          },

          '.file-preview': {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: '100%',
            height: '100%',

            '.preview-img': {
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            },
          },

          '.ipt-file': {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: '100%',
            height: '100%',
            visibility: 'hidden',
          },

          '.placeholder-file': {
            fontSize: '12px',
            lineHeight: '18px',
            color: theme('colors.gray.10'),
            textAlign: 'center',
          },

          '.label-file': {
            fontSize: '15px',
            lineHeight: '22px',
            color: theme('colors.gray.10'),
          },
        },

        '.form-picker': {
          display: 'flex',
          flexDirection: 'column',
          gap: theme('spacing.1'),

          '&.disabled': {
            '.picker-field': {
              backgroundColor: theme('colors.gray.15.2'),
            },
          },

          '&.has-value': {
            '.label-picker': {
              top: '0',
              transform: 'unset',
              fontSize: theme('fontSize.xs'),
              lineHeight: '18px',
              opacity: theme('opacity.100'),
            },
          },

          '.picker-field': {
            display: 'flex',
            position: 'relative',
            borderWidth: '1px',
            borderRadius: '4px',
            padding: '3px 0',
            cursor: 'pointer',
            userSelect: 'none',
            transition: '.25s ease',

            '&:focus-within': {
              borderColor: theme('colors.green.0.DEFAULT'),
            },
          },

          '.label-picker': {
            position: 'absolute',
            top: '50%',
            left: theme('spacing.2'),
            transform: 'translateY(-50%)',
            color: theme('colors.gray.10'),
            transition: '.5s ease',
            pointerEvents: 'none',
            opacity: theme('opacity.0'),
            fontSize: '15px',
            lineHeight: '22px',
          },
        },

        '.checkbox': {
          display: 'inline-flex',
          alignItems: 'center',
          gap: theme('spacing.2'),
          cursor: 'pointer',

          '&__container': {
            display: 'inline-block',
            verticalAlign: 'middle',
          },

          '&__ipt': {
            border: '0',
            clip: 'rect(0 0 0 0)',
            clipPath: 'inset(50%)',
            height: '1px',
            margin: '-1px',
            overflow: 'hidden',
            padding: '0',
            position: 'absolute',
            whiteSpace: 'nowrap',
            width: '1px',
          },

          '&__box': {
            position: 'relative',
            width: '16px',
            height: '16px',
            borderWidth: '2px',
            borderRadius: '4px',
            transition: '.25s ease',
            cursor: 'pointer',
          },

          '&__label': {
            fontSize: theme('fontSize.sm'),
            lineHeight: '21px',
            color: theme('colors.gray.7'),
          },

          '&__icon': {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: theme('colors.white'),
          },
        },

        '.switch': {
          display: 'inline-flex',
          borderRadius: '22px',
          width: '38px',
          height: theme('height.6'),
          padding: '1px',
          transition: '.25s ease',
          backgroundColor: theme('colors.gray.14'),

          '&.active': {
            '.switch': {
              '&__thumb': {
                left: '100%',
                transform: 'translate(-100%,-50%)',
              },
            },
          },

          '&:not(.disabled)': {
            cursor: 'pointer',
            pointerEvents: 'auto',

            '&.active': {
              backgroundColor: theme('colors.green.0.DEFAULT'),
            },
          },

          '&.disabled': {
            '&.active': {
              backgroundColor: theme('colors.gray.11'),
            },
          },

          '&__container': {
            position: 'relative',
            display: 'flex',
            width: theme('width.full'),
          },

          '&__ipt': {
            border: '0',
            clip: 'rect(0 0 0 0)',
            clipPath: 'inset(50%)',
            height: '1px',
            margin: '-1px',
            overflow: 'hidden',
            padding: '0',
            position: 'absolute',
            whiteSpace: 'nowrap',
            width: '1px',
          },

          '&__thumb': {
            position: 'absolute',
            top: '50%',
            left: '0',
            transform: 'translateY(-50%)',
            width: '22px',
            height: '100%',
            backgroundColor: theme('colors.white'),
            borderRadius: theme('borderRadius.full'),
            transition: '.25s ease',
          },
        },

        '.range': {
          '[type="range"]': {
            appearance: 'none',
            borderRadius: theme('borderRadius.DEFAULT'),

            '&::-webkit-slider-thumb': {
              appearance: 'none',
              width: '10px',
              height: '10px',
              marginTop: `-1.55px`,
              backgroundColor: theme('colors.orange.400'),
              border: 0,
              borderRadius: theme('borderRadius.full'),
              boxShadow: `0 0 0 5px rgba(255, 255, 255, 0.1)`,
            },

            '&::-webkit-slider-runnable-track': {
              appearance: 'none',
              height: '6px',
              cursor: theme('cursor.pointer'),
            },
          },

          '.bubble': {
            position: 'absolute',
            top: `calc(${theme('translate.full')} + 13.76px)`,
            left: theme('translate.1/2'),
            transform: `translateX(-${theme('translate.1/2')})`,
            padding: `${theme('spacing.[0.5]')} ${theme('spacing.2')}`,
            minWidth: theme('width.10'),
            textAlign: theme('position.center'),
            backgroundColor: theme('colors.red.15'),
            borderRadius: theme('borderRadius.md'),
            color: theme('colors.white'),

            '&::before': {
              content: theme('content.DEFAULT'),
              position: 'absolute',
              bottom: theme('translate.full'),
              left: theme('translate.1/2'),
              transform: `translateX(-${theme('translate.1/2')})`,
              borderWidth: '0 8px 5px',
              borderColor: `${theme('backgroundColor.transparent')} ${theme(
                'backgroundColor.transparent',
              )} ${theme('colors.red.15')} ${theme(
                'backgroundColor.transparent',
              )}`,
            },
          },
        },

        '.btn': {
          position: 'relative',
          display: theme('display.flex'),
          alignItems: theme('position.center'),
          justifyContent: theme('position.center'),
          padding: `10.5px ${theme('spacing.4')}`,
          fontWeight: theme('fontWeight.medium'),
          fontSize: '15px',
          lineHeight: '22px',
          transition: '.5s',
          zIndex: 0,
          borderWidth: '1px',
          borderRadius: theme('borderRadius.DEFAULT'),
          borderColor: 'currentColor',
          overflow: 'hidden',
          minHeight: '48px',

          '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: theme('width.full'),
            height: theme('height.full'),
            backgroundColor: 'currentColor',
            opacity: theme('opacity.5'),
          },

          '&:not(.outlined)': {
            borderColor: 'transparent',

            '&::before': {
              opacity: theme('opacity.100'),
            },

            '.btn__content': {
              color: theme('colors.white'),
            },
          },

          '&:disabled': {
            pointerEvents: 'none',

            '&::before': {
              backgroundColor: theme('colors.gray.10'),
            },
          },

          '&__content': {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: theme('spacing.2'),
            color: 'currentColor',
          },
        },

        '.typography': {
          position: 'relative',
          borderRadius: '4px',

          '&:hover': {
            color: theme('colors.green.0.DEFAULT'),

            '&::before': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
              backgroundColor: 'currentColor',
              borderRadius: '4px',
              opacity: theme('opacity.5'),
            },

            '.typography__text': {
              fontWeight: '500',
            },
          },

          '&__text': {
            display: 'flex',
            padding: theme('spacing.2'),
            color: 'currentColor',
          },
        },

        '.alert': {
          position: 'relative',
          display: 'inline-flex',
          justifyContent: 'center',
          padding: '4.5px 12px',
          borderWidth: '1px',
          borderColor: 'currentColor',
          borderRadius: '4px',
          minWidth: '80px',

          '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: theme('width.full'),
            height: theme('height.full'),
            backgroundColor: 'currentColor',
            opacity: theme('opacity.5'),
          },
        },

        '.grid': {
          '&__box': {
            borderWidth: '1px',
            borderRadius: '8px',
            overflow: 'auto',
          },

          '&__row': {
            display: 'flex',
            fontSize: '15px',
            lineHeight: '22px',

            '&:not(:last-child)': {
              '.grid__cell': {
                borderBottomWidth: '1px',
              },
            },
          },

          '&__title': {
            color: theme('colors.gray.7'),
            borderRightWidth: '1px',
            flexShrink: '0',
            minWidth: theme('width.1/3'),
          },

          '&__content': {
            flex: '1',
            whiteSpace: 'nowrap',
          },

          '&__cell': {
            display: 'flex',
            alignItems: 'center',
            padding: theme('spacing.3'),
          },
        },

        '.bubble': {
          position: 'absolute',
          background:
            'linear-gradient(35.25deg, #61CAA4 13.5%, #FFFFFF 85.62%)',
          boxShadow: `-9px 14px 41px ${theme('colors.gray.15.7')}`,
          filter: 'blur(2px)',
          borderRadius: '100%',
          pointerEvents: 'none',
        },

        '.tooltip': {
          display: 'inline-flex',

          '&__link': {},

          '&__popper': {
            position: 'absolute',
            top: '0',
            left: '0',
            display: 'flex',
            background: theme('colors.gray.7'),
            padding: '2px 12px',
            borderRadius: '4px',
            color: theme('colors.white'),
            fontSize: '12px',
            lineHeight: '18px',
            zIndex: '1',
          },
        },

        '.tabs': {
          display: 'flex',
          flexDirection: 'column',
          gap: theme('spacing.5'),

          '&-header': {
            display: 'flex',
            borderBottomWidth: '1px',
            overflow: 'auto',
          },

          '&-content': {},

          '.tab': {
            '&-btn': {
              padding: '6px 8px',
              color: theme('colors.black.2'),
              borderBottomWidth: '1px',
              borderColor: 'transparent',
              borderTopLeftRadius: theme('borderRadius.lg'),
              borderTopRightRadius: theme('borderRadius.lg'),
              backgroundColor: 'transparent',
              transition: '.25s ease',
              fontSize: '15px',
              lineHeight: '22px',
              whiteSpace: 'nowrap',

              '&.active': {
                backgroundColor: theme('colors.green.14'),
                color: theme('colors.green.0.DEFAULT'),
                borderColor: theme('colors.green.0.DEFAULT'),
              },
            },

            '&-pane': {
              '&:not(.active)': {
                pointerEvents: 'none',
              },
            },
          },
        },

        '.sidebar': {
          position: 'fixed',
          top: '0',
          left: '0',
          transform: 'translateX(-100%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '67px',
          padding: `30px ${theme('spacing.4')}`,
          flexShrink: '0',
          backgroundColor: theme('colors.white'),
          height: '100vh',
          overflow: 'auto',
          zIndex: '999',
          transition: '.25s ease',

          '&.active': {
            transform: 'translateX(0)',
          },

          '&__item': {
            display: 'flex',
            flexDirection: 'column',
            gap: theme('spacing.2'),
          },

          '&__nav': {
            display: 'flex',
            flexDirection: 'column',
            gap: theme('spacing.2'),

            '.nav': {
              '&__item': {
                display: 'flex',
                flexDirection: 'column',
                gap: theme('spacing.1'),
                cursor: 'pointer',
              },

              '&__icon': {
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: '0',
                width: theme('width.6'),
                height: theme('height.6'),
                transition: '.25s ease',
              },

              '&__control': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: theme('spacing.2'),
                flex: '1',
                padding: '12px 0',
                color: theme('colors.black.2'),

                '&:hover': {
                  color: theme('colors.green.0.DEFAULT'),
                },

                '&.active': {
                  color: theme('colors.green.0.DEFAULT'),

                  '.nav__title': {
                    fontWeight: theme('fontWeight.medium'),
                  },
                },
              },

              '&__title': {
                alignSelf: 'center',
              },

              '&__left': {
                display: 'flex',
                gap: theme('spacing.2'),
              },

              '&__dropdown': {
                marginLeft: theme('spacing.3'),
                paddingLeft: theme('spacing.2'),
                borderLeftWidth: '1px',
                transformOrigin: 'top',

                '.dropdown': {
                  '&__link': {
                    fontSize: '14px',
                    lineHeight: '21px',
                    borderRadius: '4px',

                    '&.active': {
                      color: theme('colors.green.0.DEFAULT'),

                      '.typography': {
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '100%',
                          height: '100%',
                          backgroundColor: 'currentColor',
                          borderRadius: '4px',
                          opacity: theme('opacity.5'),
                        },

                        '.typography__text': {
                          fontWeight: '500',
                        },
                      },
                    },

                    '.typography__text': {
                      padding: '6px 8px',
                    },
                  },
                },
              },
            },
          },
        },
      });
    }),
  ],
};
