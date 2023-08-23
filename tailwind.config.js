const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./lib/**/*.{js,jsx,ts,tsx}'],
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
            '@apply bg-[#AAA] rounded-lg': {},
          },

          '&::-webkit-scrollbar-track': {
            '@apply bg-[#EEE] rounded-lg': {},
          },

          '&::-webkit-scrollbar-thumb:hover': {
            '@apply bg-[#999]': {},
          },

          '&::before, &::after': {
            '@apply pointer-events-none': {},
          },
        },

        body: {
          '@apply overflow-x-hidden bg-gray-100 text-stone-800 min-h-screen':
            {},
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
            '@apply text-neutral-500 w-6 h-6 z-[1]': {},
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
              '@apply relative z-0': {},
              transition: '.5s',

              '&:nth-child(even)': {
                '&::after': {
                  '@apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full bg-slate-50 rounded -z-[1]':
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
            '@apply relative flex items-center justify-center w-8 h-8 text-[15px] leading-[22px] bg-gray-100 rounded-lg duration-200 text-neutral-500 overflow-hidden z-0':
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
          '@apply fixed p-5 bg-white rounded z-[999] shadow-md max-w-fit': {},
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
                '@apply cursor-pointer bg-slate-50 rounded': {},

                '&__content': {
                  '@apply text-sm': {},
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
            '@apply absolute top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none whitespace-nowrap max-w-full text-ellipsis overflow-hidden':
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
            '@apply text-zinc-400 whitespace-nowrap': {},
            fontSize: '15px',
            lineHeight: '22px',
          },

          '&-dropdown': {
            '@apply flex flex-col gap-3': {},

            '.options': {
              '@apply flex flex-col max-h-60 overflow-auto': {},
            },

            '.option': {
              '@apply text-base rounded cursor-pointer bg-white': {},
              padding: `${theme('spacing.2')} ${theme('spacing.[1.5]')}`,
              transition: '.5s ease',

              '&:hover': {
                '@apply bg-emerald-500/5': {},

                '.option': {
                  '&-value': {
                    '@apply font-medium text-emerald-500': {},
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
            '@apply border-emerald-500': {},
          },

          '.label-field': {
            '@apply absolute top-1/2 left-0 -translate-y-1/2 text-[15px] leading-[22px] text-zinc-400 pointer-events-none whitespace-nowrap max-w-full text-ellipsis overflow-hidden':
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
            '@apply flex gap-1 text-zinc-400': {},
          },

          '.text-field': {
            '@apply relative flex flex-1 items-center gap-0.5 h-full text-stone-800 cursor-text':
              {},

            '&__prefix': {
              '@apply mt-[19px] p-[2px_6px] bg-gray-100 rounded text-xs leading-[18px] pointer-events-none':
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
                '@apply text-zinc-400': {},
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
            '@apply bg-gray-100': {},

            '.ipt': {
              '@apply cursor-default': {},
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
            '@apply text-[15px] leading-[22px] text-zinc-400': {},
          },
        },

        '.form-picker': {
          '@apply flex flex-col gap-1': {},

          '&.disabled': {
            '.picker-field': {
              '@apply bg-gray-100': {},
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
              '@apply border-emerald-500': {},
            },
          },

          '.label-picker': {
            '@apply absolute top-1/2 left-2 -translate-y-1/2 text-zinc-400 pointer-events-none opacity-0 text-[15px] leading-[22px]':
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
            '@apply text-sm text-neutral-500': {},
          },

          '&__icon': {
            '@apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white':
              {},
          },
        },

        '.switch': {
          '@apply inline-flex rounded-3xl w-[38px] h-6 p-px bg-gray-200': {},
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
              '@apply bg-emerald-500': {},
            },
          },

          '&.disabled': {
            '&.active': {
              '@apply bg-stone-400': {},
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
              '@apply bg-zinc-400': {},
            },
          },

          '&__content': {
            '@apply relative flex items-center gap-2 text-current': {},
          },
        },

        '.typography': {
          '@apply relative rounded': {},

          '&:hover': {
            '@apply text-emerald-500': {},

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

          '&::before': {
            '@apply content-[""] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-current opacity-5':
              {},
          },
        },

        '.tooltip': {
          '@apply inline-flex': {},

          '&__link': {},

          '&__popper': {
            '@apply absolute top-0 left-0 flex bg-neutral-500 rounded text-white text-xs leading-[18px] z-[1]':
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
              '@apply text-stone-800 border-b border-transparent rounded-tl-lg rounded-tr-lg bg-transparent text-[15px] leading-[22px] whitespace-nowrap':
                {},
              padding: '6px 8px',
              transition: '.25s ease',

              '&.active': {
                '@apply bg-emerald-50 text-emerald-500 border-emerald-500': {},
              },
            },

            '&-pane': {
              '&:not(.active)': {
                '@apply pointer-events-none': {},
              },
            },
          },
        },
      });
    }),
  ],
};
