const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [],
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
          '@apply fixed overflow-auto z-[999] inset-0': {},

          '&-overlay': {
            '@apply flex items-center justify-center min-h-full bg-black/50':
              {},
            padding: `0 ${theme('spacing.3')}`,
          },

          '&-container': {
            '@apply relative w-full bg-white rounded-lg': {},
            margin: `${theme('spacing.8')} auto`,
          },

          '&-close': {
            '@apply text-gray-7 w-6 h-6 z-[1]': {},
          },

          '&-header, &-content, &-footer': {
            '@apply relative p-3': {},

            '@screen md': {
              padding: `${theme('spacing.4')} ${theme('spacing.5')}`,
            },
          },

          '&-header': {
            '@apply flex justify-between border-b': {},

            '@screen md': {
              '@apply pb-3': {},
            },
          },

          '&-content': {
            '@screen md': {
              '@apply pb-8': {},
            },
          },

          '&-footer': {
            '@apply border-t': {},
          },
        },

        '.tbl-wrapper': {
          '@apply relative w-full border rounded-lg overflow-x-auto': {},
        },

        'table.tbl': {
          '@apply w-full': {},

          'th, td': {
            '@apply text-[15px] leading-[22px]': {},
          },

          thead: {
            tr: {
              '@apply font-semibold text-[15px] leading-5': {},
            },

            th: {
              '@apply bg-gray-15-3 whitespace-nowrap': {},
              padding: `${theme('spacing.3')} ${theme('spacing.4')}`,

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
              '@apply relative z-0': {},
              transition: '.5s',

              '&:nth-child(even)': {
                '&::after': {
                  '@apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full bg-gray-15-7 rounded -z-[1]':
                    {},
                  content: '""',
                  width: 'calc(100% - 16px)',
                },
              },
            },

            td: {
              '@apply whitespace-nowrap select-text': {},
              padding: `10.5px ${theme('spacing.4')}`,
            },
          },
        },

        '.pagination': {
          '@apply relative flex flex-wrap items-center justify-center gap-2 z-[1]':
            {},

          '@screen lg': {
            '@apply flex-nowrap justify-between': {},
          },

          '&-size': {
            '@apply flex basis-full items-center justify-center gap-3': {},

            '@screen lg': {
              '@apply flex-auto justify-start': {},
            },

            '&__label': {
              '@apply text-sm text-gray-7': {},
            },

            '.select': {
              '&-container': {
                '@apply text-[15px] bg-gray-15-2': {},
                padding: `${theme('spacing.2')} ${theme('spacing.3')}`,
              },

              '&-values': {
                '@apply !p-0': {},
              },
            },
          },

          '&-container': {
            '@apply flex flex-wrap items-center justify-center gap-3': {},
          },

          '&-item': {
            '@apply relative flex items-center justify-center w-8 h-8 text-[15px] leading-[22px] bg-gray-15-2 rounded-lg duration-200 text-gray-7 overflow-hidden z-0':
              {},

            '&:not(&--active)': {
              '@apply cursor-pointer pointer-events-auto': {},

              '&:hover': {
                '@apply bg-green-0 text-white': {},
              },
            },

            '&--active': {
              '@apply cursor-default pointer-events-none bg-green-0 text-white':
                {},
            },
          },
        },

        '.select': {
          '@apply relative flex flex-col gap-1 w-full select-none cursor-pointer':
            {},
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
                '@apply cursor-pointer bg-gray-15-7 rounded': {},

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
                  '@apply top-0 text-xs': {},
                  transform: 'unset',
                  lineHeight: '18px',
                },

                '&-values': {
                  padding: `${theme('spacing.4')} 0 ${theme('spacing.[0.5]')}`,
                },
              },
            },
          },

          '&-label': {
            '@apply absolute top-1/2 -translate-y-1/2 text-gray-10 pointer-events-none whitespace-nowrap max-w-full text-ellipsis overflow-hidden':
              {},
            transition: '.5s ease',
            fontSize: '15px',
            lineHeight: '22px',
          },

          '&-values': {
            '@apply flex flex-wrap gap-1': {},
          },

          '&-value': {
            '@apply relative flex items-center gap-2': {},
            transition: '.25s ease',

            '&__content': {
              '@apply flex items-center gap-2': {},
            },

            '&__remove': {
              '@apply items-center justify-center w-3 h-3': {},
            },
          },

          '&-container': {
            '@apply flex items-center justify-center gap-1.5 border rounded bg-white':
              {},
            padding: `3px ${theme('spacing.2')}`,
            transition: '.5s ease',
          },

          '&-placeholder': {
            '@apply text-gray-10 whitespace-nowrap': {},
            fontSize: '15px',
            lineHeight: '22px',
          },

          '&-dropdown': {
            '@apply flex flex-col gap-3': {},

            '.options': {
              '@apply flex flex-col gap-3 max-h-60 overflow-auto': {},
            },

            '.option': {
              '@apply text-base rounded cursor-pointer bg-white': {},
              padding: `${theme('spacing.2')} ${theme('spacing.[1.5]')}`,
              transition: '.5s ease',

              '&:hover': {
                '@apply bg-green-0/5': {},

                '.option': {
                  '&-value': {
                    '@apply font-medium text-green-0': {},
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
          '@apply w-full whitespace-nowrap': {},
        },

        '.form-field': {
          '@apply relative flex items-center justify-between gap-1 w-full border rounded overflow-hidden bg-white':
            {},
          padding: `0 ${theme('spacing.2')}`,
          transition: '.25s ease',

          '&:focus-within': {
            '@apply border-green-0': {},
          },

          '.label-field': {
            '@apply absolute top-1/2 left-0 -translate-y-1/2 text-[15px] leading-[22px] text-gray-10 pointer-events-none whitespace-nowrap max-w-full text-ellipsis overflow-hidden':
              {},
            transition: 'all .2s ease',
          },

          '&:not(.no-label)': {
            '.text-field': {
              '.ipt': {
                '&:focus': {
                  '@apply pt-[19px] pb-[3px]': {},

                  '& ~ .label-field': {
                    '@apply text-xs top-[3px] translate-y-0': {},
                  },
                },
              },
            },
          },

          '.icon-field': {
            '@apply flex gap-1 text-gray-10': {},
          },

          '.text-field': {
            '@apply relative flex flex-1 items-center gap-0.5 h-full text-black-2 cursor-text':
              {},

            '&__prefix': {
              '@apply mt-[19px] p-[2px_6px] bg-gray-15-2 rounded text-xs leading-[18px] pointer-events-none':
                {},
            },

            '.ipt': {
              '@apply text-[15px] leading-[22px] border-none bg-transparent text-current min-h-[46px] resize-none':
                {},
              padding: '11px 0',
              outline: 'none',
              textAlign: 'inherit',
              transition: 'all .2s ease',

              '&::placehoder': {
                '@apply text-gray-10': {},
              },
            },
          },

          '&.has-value': {
            '.label-field': {
              '@apply text-xs top-[3px] translate-y-0': {},
            },

            '&:not(.no-label)': {
              '.ipt': {
                '@apply pt-[19px] pb-[3px]': {},
              },
            },
          },

          '&.disabled': {
            '@apply bg-gray-15-2': {},

            '.ipt': {
              '@apply cursor-default': {},
            },
          },
        },

        '.form-file': {
          '@apply flex flex-col gap-1 w-full h-full': {},

          '&:not(.disabled)': {
            '.file-container': {
              '@apply border border-dashed border-green-0 cursor-pointer': {},
            },
          },

          '.file-container': {
            '@apply relative flex items-center justify-center rounded overflow-hidden h-full':
              {},
            padding: '14px 18px',
          },

          '.file-field': {
            '@apply flex flex-col items-center justify-center gap-1 pointer-events-none':
              {},
          },

          '.file-preview': {
            '@apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full':
              {},

            '.preview-img': {
              '@apply w-full h-full object-cover': {},
            },
          },

          '.ipt-file': {
            '@apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full invisible':
              {},
          },

          '.placeholder-file': {
            '@apply text-xs leading-[18px] text-gray-10 text-center': {},
          },

          '.label-file': {
            '@apply text-[15px] leading-[22px] text-gray-10': {},
          },
        },

        '.form-picker': {
          '@apply flex flex-col gap-1': {},

          '&.disabled': {
            '.picker-field': {
              '@apply bg-gray-15-2': {},
            },
          },

          '&.has-value': {
            '.label-picker': {
              '@apply top-0 text-xs leading-[18px] opacity-100': {},
              transform: 'unset',
            },
          },

          '.picker-field': {
            '@apply relative flex border rounded cursor-pointer select-none':
              {},
            padding: '3px 0',
            transition: '.25s ease',

            '&:focus-within': {
              '@apply border-green-0': {},
            },
          },

          '.label-picker': {
            '@apply absolute top-1/2 left-2 -translate-y-1/2 text-gray-10 pointer-events-none opacity-0 text-[15px] leading-[22px]':
              {},
            transition: '.5s ease',
          },
        },

        '.checkbox': {
          '@apply inline-flex items-center gap-2 cursor-pointer': {},

          '&__container': {
            '@apply inline-block align-middle': {},
          },

          '&__ipt': {
            '@apply absolute border-0 w-px h-px -m-px overflow-hidden p-0 whitespace-nowrap':
              {},
            clip: 'rect(0 0 0 0)',
            clipPath: 'inset(50%)',
          },

          '&__box': {
            '@apply relative w-4 h-4 border-2 rounded cursor-pointer': {},
            transition: '.25s ease',
          },

          '&__label': {
            '@apply text-sm text-gray-7': {},
          },

          '&__icon': {
            '@apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white':
              {},
          },
        },

        '.switch': {
          '@apply inline-flex rounded-3xl w-[38px] h-6 p-px bg-gray-14': {},
          transition: '.25s ease',

          '&.active': {
            '.switch': {
              '&__thumb': {
                '@apply left-full -translate-x-full -translate-y-1/2': {},
              },
            },
          },

          '&:not(.disabled)': {
            '@apply cursor-pointer pointer-events-auto': {},

            '&.active': {
              '@apply bg-green-0': {},
            },
          },

          '&.disabled': {
            '&.active': {
              '@apply bg-gray-11': {},
            },
          },

          '&__container': {
            '@apply relative flex w-full': {},
          },

          '&__ipt': {
            '@apply absolute border-0 w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap':
              {},
            clip: 'rect(0 0 0 0)',
            clipPath: 'inset(50%)',
          },

          '&__thumb': {
            '@apply absolute top-1/2 left-0 -translate-y-1/2 w-[22px] h-full bg-white rounded-full':
              {},
            transition: '.25s ease',
          },
        },

        '.range': {
          '@apply relative flex': {},

          '[type="range"]': {
            '@apply appearance-none rounded': {},

            '&::-webkit-slider-thumb': {
              '@apply appearance-none w-2.5 h-2.5 -mt-[1.55px] bg-orange-400 border-0 rounded-full':
                {},
              boxShadow: `0 0 0 5px rgba(255, 255, 255, 0.1)`,
            },

            '&::-webkit-slider-runnable-track': {
              '@apply appearance-none h-1.5 cursor-pointer': {},
            },
          },

          '&__bubble': {
            '@apply absolute left-1/2 -translate-x-1/2 text-center bg-red-15 rounded-md text-white':
              {},
            top: `calc(${theme('translate.full')} + 13.76px)`,
            padding: `${theme('spacing.[0.5]')} ${theme('spacing.2')}`,
            minWidth: theme('width.10'),

            '&::before': {
              '@apply absolute bottom-full left-1/2 -translate-x-1/2': {},
              content: '""',
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
          '@apply relative flex items-center justify-center font-medium text-[15px] leading-[22px] z-0 border rounded border-current overflow-hidden min-h-[48px]':
            {},
          padding: `10.5px ${theme('spacing.4')}`,
          transition: '.5s',

          '&::before': {
            '@apply content-[""] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-current opacity-5':
              {},
          },

          '&:not(.outlined)': {
            '@apply border-transparent': {},

            '&::before': {
              '@apply opacity-100': {},
            },

            '.btn__content': {
              '@apply text-white': {},
            },
          },

          '&:disabled': {
            '@apply pointer-events-none': {},

            '&::before': {
              '@apply bg-gray-10': {},
            },
          },

          '&__content': {
            '@apply relative flex items-center gap-2 text-current': {},
          },
        },

        '.typography': {
          '@apply relative rounded': {},

          '&:hover': {
            '@apply text-green-0': {},

            '&::before': {
              '@apply content-[""] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-current rounded opacity-5':
                {},
            },

            '.typography__text': {
              '@apply font-medium': {},
            },
          },

          '&__text': {
            '@apply flex p-2 text-current': {},
          },
        },

        '.alert': {
          '@apply relative inline-flex justify-center border border-current rounded min-w-[80px]':
            {},
          padding: '4.5px 12px',

          '&::before': {
            '@apply content-[""] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-current opacity-5':
              {},
          },
        },

        '.tooltip': {
          '@apply inline-flex': {},

          '&__link': {},

          '&__popper': {
            '@apply absolute top-0 left-0 flex bg-gray-7 rounded text-white text-xs leading-[18px] z-[1]':
              {},
            padding: '2px 12px',
          },
        },

        '.tabs': {
          '@apply flex flex-col gap-5': {},

          '&-header': {
            '@apply flex border-b overflow-auto': {},
          },

          '&-content': {},

          '.tab': {
            '&-btn': {
              '@apply text-black-2 border-b border-transparent rounded-tl-lg rounded-tr-lg bg-transparent text-[15px] leading-[22px] whitespace-nowrap':
                {},
              padding: '6px 8px',
              transition: '.25s ease',

              '&.active': {
                '@apply bg-green-14 text-green-0 border-green-0': {},
              },
            },

            '&-pane': {
              '&:not(.active)': {
                '@apply pointer-events-none': {},
              },
            },
          },
        },

        '.sidebar': {
          '@apply fixed top-0 left-0 -translate-x-full flex flex-shrink-0 flex-col gap-16 bg-white h-screen overflow-auto z-[999]':
            {},
          padding: `30px ${theme('spacing.4')}`,
          transition: '.25s ease',

          '&.active': {
            transform: 'translateX(0)',
          },

          '&__item': {
            '@apply flex flex-col gap-2': {},
          },

          '&__nav': {
            '@apply flex flex-col gap-2': {},

            '.nav': {
              '&__item': {
                '@apply flex flex-col gap-1 cursor-pointer': {},
              },

              '&__icon': {
                '@apply flex-shrink-0 items-center justify-center w-6 h-6': {},
                transition: '.25s ease',
              },

              '&__control': {
                '@apply flex items-center justify-between gap-2 flex-1 text-black-2':
                  {},
                padding: '12px 0',

                '&:hover': {
                  '@apply text-green-0': {},
                },

                '&.active': {
                  '@apply text-green-0': {},

                  '.nav__title': {
                    '@apply font-medium': {},
                  },
                },
              },

              '&__title': {
                '@apply self-center': {},
              },

              '&__left': {
                '@apply flex gap-2': {},
              },

              '&__dropdown': {
                '@apply ml-3 pl-2 border-l origin-top': {},

                '.dropdown': {
                  '&__link': {
                    '@apply text-sm rounded': {},

                    '&.active': {
                      '@apply text-green-0': {},

                      '.typography': {
                        '&::before': {
                          '@apply content-[""] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-current rounded opacity-5':
                            {},
                        },

                        '.typography__text': {
                          '@apply font-medium': {},
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
