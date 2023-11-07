import {
  ArrowLeft,
  ArrowRight,
  ArrowRightSquare,
  ArrowUpDown,
  Ban,
  BarChart4Icon,
  Camera,
  Check,
  ChevronsUpDown,
  Download,
  Edit,
  Euro,
  Files,
  FileText,
  Inbox,
  Info,
  Laptop,
  Laptop2,
  Loader2,
  Lock,
  LogIn,
  LogOut,
  LucideProps,
  Mail,
  MessageSquare,
  Minus,
  Moon,
  MoreHorizontal,
  Plus,
  Printer,
  QrCode,
  Rocket,
  RotateCcw,
  ScrollText,
  SendIcon,
  ShoppingBag,
  ShoppingCart,
  Sun,
  Trash2,
  User,
} from "lucide-react";

export const Icons = {
  qrCode: QrCode,
  files: Files,
  lock: Lock,
  arrowRightSquare: ArrowRightSquare,
  logOut: LogOut,
  user: User,
  logo: Rocket,
  sun: Sun,
  moon: Moon,
  loading: Loader2,
  laptop: Laptop,
  shoppingCart: ShoppingCart,
  info: Info,
  camera: Camera,
  commentReply: MessageSquare,
  arrowLeft: ArrowLeft,
  minus: Minus,
  plus: Plus,
  shoppingBag: ShoppingBag,
  check: Check,
  chevronsUpDown: ChevronsUpDown,
  arrowRight: ArrowRight,
  chart: BarChart4Icon,
  notification: Inbox,
  mail: Mail,
  arrowUpDown: ArrowUpDown,
  moreHorizontal: MoreHorizontal,
  reset: RotateCcw,
  edit: Edit,
  trash: Trash2,
  send: SendIcon,
  printer: Printer,
  euro: Euro,
  fileText: FileText,
  scrollText: ScrollText,
  download: Download,
  ban: Ban,
  login: LogIn,
  microsoft: (props: LucideProps) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
      <rect fill="#FDB813" width="380" height="380" />
      <rect fill="#7DB901" width="380" height="380" x="420" />
      <rect fill="#00A4EF" width="380" height="380" y="420" />
      <rect fill="#FF4C4C" width="380" height="380" x="420" y="420" />
    </svg>
  ),
  google: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
      <path d="M1 1h22v22H1z" fill="none" />
    </svg>
  ),
  dornbirn: (props: LucideProps) => (
    <svg
      {...props}
      width="285"
      height="44"
      viewBox="0 0 285 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <g>
          <path
            d="M11.1125 43.3955C22.8236 43.3955 25.3266 37.1545 25.3266 25.3824C25.3266 13.9104 22.4748 8.67684 11.1125 8.67684H0V43.3955H11.1125ZM18.2196 25.3824C18.2196 32.528 17.3203 37.0045 11.1125 37.0045H6.806V15.0658H11.1125C17.3203 15.0658 18.2196 18.3384 18.2196 25.3824ZM51.4347 37.6093C46.3314 37.6093 44.679 34.2876 44.679 26.2884C44.679 18.2901 46.3314 14.463 51.4347 14.463C56.5412 14.463 58.1927 18.2901 58.1927 26.2884C58.1927 34.2876 56.5412 37.6093 51.4347 37.6093ZM51.4347 44C61.6474 44 65.3007 37.9623 65.3007 26.2884C65.3007 14.614 61.6474 8.07415 51.4347 8.07415C41.2244 8.07415 37.5713 14.614 37.5713 26.2884C37.5713 37.9623 41.2244 44 51.4347 44ZM91.7849 31.9226L95.738 43.3955H103.296L98.4914 30.1634C101.596 28.1981 103.448 25.3327 103.448 20.2025C103.448 11.9985 99.0931 8.67684 91.4349 8.67684H78.8204V43.3955H85.6274V31.9743H90.7341L91.7849 31.9226ZM96.3904 20.2993C96.3904 23.4209 94.4884 25.786 91.5347 25.786H85.6274V15.0658H91.4349C94.2366 15.0658 96.3904 16.9784 96.3904 20.2993ZM117.885 43.3955H124.791V15.9227H125.342L134.454 43.3955H145.464V8.67684H138.558V36.1499H138.008L129.197 8.67684H117.885V43.3955ZM160.282 8.67684V43.3955H173.243C179.553 43.3955 184.307 40.4271 184.307 33.5852C184.307 29.0542 183.009 26.9924 179.901 25.6325C182.605 23.9231 183.655 22.0092 183.655 17.4815C183.655 11.1923 178.8 8.67684 173.045 8.67684H160.282ZM172.893 28.9576C175.146 28.9576 177.2 30.2634 177.2 33.0315C177.2 35.8975 175.246 37.2072 172.893 37.2072H167.09V28.9576H172.893ZM172.697 14.866C174.797 14.866 176.596 16.1227 176.596 18.7408C176.596 21.4562 174.946 23.0173 172.746 23.0173H167.09V14.866H172.697ZM232.314 31.9217L236.271 43.3955H243.83L239.022 30.162C242.127 28.1973 243.981 25.3313 243.981 20.201C243.981 11.9962 239.625 8.67422 231.965 8.67422H219.352V43.3955H226.16V31.9743H231.264L232.314 31.9217ZM236.92 20.2981C236.92 23.4194 235.019 25.7845 232.066 25.7845H226.16V15.065H231.965C234.769 15.065 236.92 16.9767 236.92 20.2981ZM257.409 43.3955H264.319V15.9154H264.87L273.981 43.3955H284.998V8.66749H278.085V36.1491H277.535L268.728 8.66749H257.409V43.3955Z"
            fill="#231F20"
          />
          <path
            d="M196.558 34.7278H204.33V-0.000176451H196.558V34.7278Z"
            fill="#CF113F"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_109_22">
          <rect width="285" height="44" fill="white" />
        </clipPath>
        <clipPath id="clip1_109_22">
          <rect width="285" height="44" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
};
