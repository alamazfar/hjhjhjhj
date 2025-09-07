@@ .. @@
 import React from 'react';
 import { Phone, MessageCircle } from 'lucide-react';
 
 const FloatingButtons = () => {
   return (
   )
 }
-    <div className="fixed right-4 bottom-4 z-40 space-y-4">
+    <div className="fixed right-4 bottom-4 z-40 space-y-3">
       {/* WhatsApp Button */}
       <a
         href="https://wa.me/918001234567?text=Hi! I would like to book a spa appointment."
         target="_blank"
         rel="noopener noreferrer"
-        className="group flex items-center bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
+        className="group flex items-center bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
       >
-        <MessageCircle className="w-6 h-6" />
-        <span className="ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
+        <div className="p-4">
+          <MessageCircle className="w-6 h-6" />
+        </div>
+        <span className="pr-4 whitespace-nowrap max-w-0 group-hover:max-w-xs transition-all duration-300 font-semibold overflow-hidden">
           WhatsApp
         </span>
       </a>
 
       {/* Call Button */}
       <a
         href="tel:+918001234567"
-        className="group flex items-center bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
+        className="group flex items-center bg-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
       >
-        <Phone className="w-6 h-6" />
-        <span className="ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
+        <div className="p-4">
+          <Phone className="w-6 h-6" />
+        </div>
+        <span className="pr-4 whitespace-nowrap max-w-0 group-hover:max-w-xs transition-all duration-300 font-semibold overflow-hidden">
           Call Now
         </span>
       </a>
     </div>
   );
 };
 
 export default FloatingButtons;