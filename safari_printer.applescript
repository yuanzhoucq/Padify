-- This script will print all web pages in active window of Safari

tell application "Safari" to activate
tell application "System Events" to tell process "Safari" to key code {53}
tell application "Safari"
  set myTabs to tabs of window 1
  repeat (length of myTabs) times
    tell application "System Events" to tell process "Safari"
      keystroke "p" using command down
      -- Choose "PDF" > "Save as PDF"
      delay (2)
      set PDFBtn to (first menu button of sheet 1 of window 1 whose name = "PDF")
      click PDFBtn
      click menu item 2 of menu 1 of PDFBtn
      delay (2)
      key code {36}
      delay (4)
      key code 48 using {control down}
      delay (1)
    end tell
  end repeat
end tell
