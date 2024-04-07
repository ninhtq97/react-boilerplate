const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {},
  plugins: [
    plugin(function ({ addBase, addComponents, theme }) {
      addBase({
        '*': {
          '@apply outline-none select-none': {},

          '&::-webkit-scrollbar': {
            '@apply w-1.5 h-1.5 bg-neutral-100 rounded-lg': {},
          },

          '&::-webkit-scrollbar-thumb': {
            '@apply bg-zinc-400 rounded-lg': {},
          },

          '&::-webkit-scrollbar-track': {
            '@apply bg-zinc-50 rounded-lg': {},
          },

          '&::-webkit-scrollbar-thumb:hover': {
            '@apply bg-[#999]': {},
          },

          '&::before, &::after': {
            '@apply pointer-events-none': {},
          },
        },

        body: {
          '@apply overflow-x-hidden text-stone-800 min-h-screen': {},
        },

        input: {
          '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: theme('spacing.0'),
          },

          '&::-ms-reveal, &::-ms-clear': {
            display: 'none',
          },

          '&[type="number"]': {
            '-moz-appearance': 'textfield',
          },
        },

        'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active, textarea:-webkit-autofill, textarea:-webkit-autofill:hover,textarea:-webkit-autofill:focus, textarea:-webkit-autofill:active, select:-webkit-autofill, select:-webkit-autofill:hover, select:-webkit-autofill:focus, select:-webkit-autofill:active':
          {
            '-webkit-text-fill-color': theme('colors.stone.800'),
            '-webkit-box-shadow': `0 0 0px 1000px ${theme(
              'colors.white',
            )} inset !important`,
            backgroundColor: `${theme('colors.transparent')} !important`,
            transition: 'background-color 5000s ease-in-out 0s',
          },
      });
      addComponents({
        '.modal': {
          '@apply fixed z-[999] inset-0 h-screen overflow-auto': {},

          '&-overlay': {
            '@apply flex items-center justify-center min-h-full bg-black/20':
              {},
          },

          '&-container': {
            '@apply relative w-full bg-white rounded-lg my-8 mx-auto': {},
          },

          '&-close': {
            '@apply text-neutral-500 w-6 h-6 z-[1]': {},
          },

          '&-header, &-content, &-footer': {
            '@apply relative p-3': {},

            '@screen md': {
              '@apply py-4 px-5': {},
            },
          },

          '&-header': {
            '@apply flex justify-between border-b': {},
          },

          '&-footer': {
            '@apply border-t': {},
          },
        },

        '.tbl-wrapper': {
          '@apply relative w-full overflow-x-auto': {},
        },

        'table.tbl': {
          '@apply w-full': {},

          'th, td': {
            '@apply text-[.9375rem] leading-[1.375rem]': {},
          },

          thead: {
            tr: {
              '@apply font-semibold text-[15px] leading-5': {},
            },

            th: {
              '@apply whitespace-nowrap': {},
              padding: `${theme('spacing.3')} ${theme('spacing.4')}`,

              '&:first-child': {
                '@apply pl-4': {},
              },

              '&:last-child': {
                '@apply pr-4': {},
              },
            },
          },

          tbody: {
            tr: {
              '@apply relative z-0 duration-200 ease-in-out': {},
            },

            td: {
              '@apply whitespace-nowrap select-text px-4 py-2.5': {},
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
              '@apply text-sm text-neutral-500': {},
            },

            '&__select': {
              '@apply max-w-[75px]': {},
            },

            '.select': {
              '&-container': {
                '@apply text-[15px] bg-gray-100': {},
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
            '@apply relative flex items-center justify-center w-8 h-8 text-[.9375rem] leading-[1.375rem] bg-gray-100 rounded-lg duration-200 text-neutral-500 overflow-hidden z-0':
              {},

            '&:not(&--active)': {
              '@apply cursor-pointer pointer-events-auto': {},

              '&:hover': {
                '@apply bg-emerald-500 text-white': {},
              },
            },

            '&--active': {
              '@apply cursor-default pointer-events-none bg-emerald-500 text-white':
                {},
            },
          },
        },

        '.popover': {
          '@apply absolute p-2 bg-white rounded z-[999] shadow-md max-w-fit':
            {},
        },

        '.select': {
          '@apply relative flex flex-col gap-1 w-full select-none': {},

          '&.multiple': {
            '.select': {
              '&-value': {
                '@apply cursor-default bg-black/10 text-black py-0.5 px-1.5 rounded-md':
                  {},

                '&__content': {
                  '@apply text-sm': {},
                },

                '&__remove': {
                  '@apply cursor-pointer items-center justify-center w-3 h-3 hover:text-rose-500':
                    {},
                },
              },
            },
          },

          '&.disabled': {
            '@apply pointer-events-none': {},
          },

          '&.has-value': {
            '.select': {
              '&-values': {
                '@apply py-[0.4375rem]': {},
              },
            },
          },

          '&.has-error': {
            '@apply text-rose-500': {},
          },

          '&.floating': {
            '&.has-value': {
              '&:not(.no-label)': {
                '.select': {
                  '&-label': {
                    '@apply top-1 text-xs': {},
                    transform: 'unset',
                  },

                  '&-values': {
                    '@apply pt-5 pb-1': {},
                  },
                },
              },
            },

            '&:not(.has-value)': {
              '.select': {
                '&-values': {
                  '@apply py-6': {},
                },
              },
            },

            '.select': {
              '&-label': {
                '@apply absolute top-1/2 -translate-y-1/2 left-3 duration-200 ease-in-out':
                  {},
              },
            },
          },

          '&:not(.floating)': {
            '&:not(.has-value)': {
              '.select': {
                '&-values': {
                  '@apply py-[1.1875rem]': {},
                },
              },
            },
          },

          '&-label': {
            '@apply pointer-events-none whitespace-nowrap text-current max-w-full text-ellipsis overflow-hidden text-sm':
              {},
          },

          '&-container': {
            '@apply relative flex items-center gap-2 cursor-pointer border border-current rounded-lg px-2':
              {},
          },

          '&-values': {
            '@apply flex flex-1 flex-wrap gap-1': {},
          },

          '&-value': {
            '@apply relative flex items-center gap-2 duration-200 ease-in-out':
              {},

            '&__content': {
              '@apply flex items-center gap-2': {},
            },
          },

          '&-placeholder': {
            '@apply whitespace-nowrap text-neutral-300': {},
          },

          '&-icon': {
            '@apply flex gap-1': {},
          },

          '&-arrow': {
            '@apply h-6 w-6 items-center justify-center': {},
          },

          '&-dropdown': {
            '@apply flex flex-col gap-3': {},

            '.options': {
              '@apply flex flex-col max-h-60 overflow-auto': {},
            },

            '.option': {
              '@apply flex items-center gap-2 text-base rounded-lg cursor-pointer bg-white duration-200 ease-in-out py-2 px-1.5':
                {},

              '&:hover': {
                '@apply bg-blue-500/5': {},

                '.option': {
                  '&-value': {
                    '@apply font-medium text-blue-500': {},
                  },
                },
              },

              '&-value': {
                '@apply text-[.9375rem] leading-[1.375rem]': {},
              },
            },
          },
        },

        '.icon': {
          '@apply flex': {},

          '&.badged': {
            '@apply relative': {},
          },
        },

        '.ipt': {
          '@apply w-full': {},

          '&__placeholder': {
            '@apply text-neutral-300': {},
          },
        },

        '.form-field': {
          '@apply relative flex flex-col gap-1 w-full': {},

          '&.floating': {
            '.label-field': {
              '@apply absolute left-0 pointer-events-none': {},
            },

            '&.disabled': {
              '&:not(.has-value)': {
                '&:not(.textarea)': {
                  '.ipt-field': {
                    '@apply pb-7': {},
                  },
                },
              },
            },

            '&.textarea': {
              '.label-field': {
                '@apply top-3.5': {},
              },
            },

            '&:not(.textarea)': {
              '.label-field': {
                '@apply top-1/2 -translate-y-1/2': {},
              },
            },

            '&.has-value': {
              '.label-field': {
                '@apply text-xs top-1 translate-y-0': {},
              },
            },

            '&:not(.no-label)': {
              '.text-field': {
                '.ipt': {
                  '&:focus': {
                    '& ~ .label-field': {
                      '@apply text-xs top-1 translate-y-0': {},
                    },
                  },
                },
              },
            },

            '.ipt-field': {
              '@apply pt-5 pb-1': {},
            },
          },

          '&:not(.floating)': {
            '&.disabled': {
              '&:not(.has-value)': {
                '&:not(.textarea)': {
                  '.ipt-field': {
                    '@apply py-[1.1875rem]': {},
                  },
                },
              },
            },

            '.ipt-field': {
              '@apply py-[0.4375rem]': {},
            },
          },

          '&.has-error': {
            '@apply text-rose-500': {},

            '.label-field': {
              '@apply text-current': {},
            },
          },

          '&.disabled': {
            '.text-field': {
              '@apply bg-gray-100': {},
            },

            '.ipt-field': {
              '@apply cursor-default': {},
            },
          },

          '.label-field': {
            '@apply text-sm text-current pointer-events-none whitespace-nowrap max-w-full text-ellipsis overflow-hidden duration-200 ease-in-out':
              {},
          },

          '.text-field': {
            '@apply relative flex items-center justify-between gap-2 w-full border border-current rounded-lg overflow-hidden bg-white px-2':
              {},
          },

          '.icon-field': {
            '@apply flex gap-2 text-current': {},
          },

          '.ipt-field': {
            '@apply relative flex flex-1 items-center gap-0.5 w-full h-full cursor-text':
              {},

            '&__prefix': {
              '@apply my-0.5 py-0.5 px-1.5 bg-black/10 rounded text-xs pointer-events-none':
                {},
            },

            '.ipt': {
              '@apply border-none bg-transparent text-current resize-none text-ellipsis':
                {},
              outline: 'none',
              textAlign: 'inherit',

              '&::placeholder': {
                '@apply text-neutral-300': {},
              },
            },
          },
        },

        '.form-file': {
          '@apply flex flex-col gap-1 w-full h-full': {},

          '&:not(.disabled)': {
            '.file-container': {
              '@apply border border-dashed border-emerald-500 cursor-pointer':
                {},
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
            '@apply text-xs leading-[18px] text-zinc-400 text-center': {},
          },

          '.label-file': {
            '@apply text-[.9375rem] leading-[1.375rem] text-zinc-400': {},
          },
        },

        '.form-picker': {
          '@apply relative flex flex-col gap-1': {},

          '&.disabled': {
            '.picker-field': {
              '@apply bg-gray-100': {},
            },
          },

          '&.floating': {
            '.label-picker': {
              '@apply absolute top-1/2 left-3 -translate-y-1/2 pointer-events-none opacity-0 duration-200 ease-in-out':
                {},

              '&.has-value': {
                '.label-picker': {
                  '@apply top-[.375rem] text-xs opacity-100': {},
                  transform: 'unset',
                },
              },
            },
          },

          '.picker-field': {
            '@apply relative flex border-transparent rounded-lg cursor-pointer select-none bg-slate-100 text-[.9375rem] leading-[1.375rem]':
              {},
          },

          '.label-picker': {
            '@apply text-zinc-400 text-[.9375rem] leading-[1.375rem]': {},
          },
        },

        '.checkbox': {
          '@apply inline-flex items-center gap-2': {},

          '&:not(.disabled)': {
            '@apply cursor-pointer': {},
          },

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
            '@apply relative w-5 h-5 border-2 border-current rounded duration-200 ease-in-out':
              {},

            '&.checked': {
              '@apply bg-current': {},
            },
          },

          '&__label': {
            '@apply text-sm': {},
          },

          '&__icon': {
            '@apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white':
              {},
          },
        },

        '.switch': {
          '@apply inline-flex rounded-3xl w-10 h-6 p-px bg-neutral-200 duration-200 ease-in-out':
            {},

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
              '@apply bg-current': {},
            },
          },

          '&.disabled': {
            '&.active': {
              '@apply bg-neutral-400': {},
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
            '@apply absolute top-1/2 left-0 -translate-y-1/2 w-[22px] h-full bg-white rounded-full duration-200 ease-in-out':
              {},
          },
        },

        '.range': {
          '@apply relative flex': {},

          '[type="range"]': {
            '@apply w-full appearance-none rounded': {},

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
            '@apply absolute left-1/2 -translate-x-1/2 text-center bg-rose-600 rounded-md text-white':
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
          '@apply relative flex items-center justify-center font-medium rounded-lg overflow-hidden duration-200 ease-in-out':
            {},

          '&:not(.outlined)': {
            '@apply bg-current': {},
          },

          '&.outlined': {
            '@apply border border-current': {},
          },

          '&:disabled': {
            '@apply pointer-events-none bg-black/5': {},
          },

          '&__content': {
            '@apply relative flex items-center justify-center gap-2 flex-1 text-current':
              {},
          },
        },

        '.alert': {
          '@apply relative inline-flex justify-center border border-current rounded min-w-[80px]':
            {},

          '&::before': {
            '@apply content-[""] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-current opacity-5':
              {},
          },
        },

        '.tooltip': {
          '@apply inline-flex': {},

          '&__link': {},

          '&__popper': {
            '@apply absolute top-0 left-0 flex bg-neutral-500 rounded text-white text-xs leading-[18px] z-[999] py-0.5 px-3':
              {},
          },
        },

        '.tabs': {
          '@apply flex flex-col flex-1 gap-5': {},

          '&-header': {
            '@apply flex overflow-auto p-[.3125rem] bg-slate-100 rounded-lg':
              {},
          },

          '&-content': {
            '@apply flex-1': {},
          },

          '.tab': {
            '&-btn': {
              '@apply flex-grow p-3 text-stone-800 whitespace-nowrap rounded-lg':
                {},
              '&.active': {
                '@apply bg-white rounded-lg': {},
              },
            },

            '&-pane': {
              '@apply flex flex-col h-full': {},
            },
          },
        },

        '.infinite-scroll': {
          '@apply relative flex': {},

          '&.inverse': {
            '@apply flex-col-reverse': {},
          },

          '&:not(.inverse)': {
            '@apply flex-col': {},
          },

          '.infinite-loading': {
            '@apply flex justify-center': {},
          },
        },
      });
    }),
  ],
};
