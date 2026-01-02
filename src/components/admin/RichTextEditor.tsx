import { useState, useRef, useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Bold, Italic, Link, Image, Heading1, Heading2, List, ListOrdered, Loader2, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const RichTextEditor = ({ value, onChange, placeholder }: RichTextEditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const isInitialized = useRef(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [linkText, setLinkText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [imageAlign, setImageAlign] = useState<'left' | 'center' | 'right'>('center');
  const [imageSize, setImageSize] = useState<'small' | 'medium' | 'large' | 'full'>('full');
  const [isLinkOpen, setIsLinkOpen] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  // Set initial content only once, or when value changes externally (e.g., editing a different article)
  useEffect(() => {
    if (editorRef.current) {
      // Only update if the editor content differs from the value prop
      // This prevents cursor jumping during typing
      if (!isInitialized.current || editorRef.current.innerHTML !== value) {
        editorRef.current.innerHTML = value;
        isInitialized.current = true;
      }
    }
  }, [value]);

  // Reset initialization when component unmounts or value becomes empty (new article)
  useEffect(() => {
    if (!value) {
      isInitialized.current = false;
      if (editorRef.current) {
        editorRef.current.innerHTML = '';
      }
    }
  }, [value]);

  const execCommand = useCallback((command: string, cmdValue?: string) => {
    document.execCommand(command, false, cmdValue);
    editorRef.current?.focus();
    handleContentChange();
  }, []);

  const handleContentChange = useCallback(() => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  }, [onChange]);

  const insertLink = () => {
    if (linkUrl && linkText) {
      const link = `<a href="${linkUrl}" target="_blank" rel="noopener noreferrer" class="text-primary underline hover:text-primary/80">${linkText}</a>`;
      document.execCommand('insertHTML', false, link);
      handleContentChange();
      setLinkUrl('');
      setLinkText('');
      setIsLinkOpen(false);
    }
  };

  const getImageClasses = (size: string, align: string) => {
    const sizeClasses = {
      small: 'max-w-[200px]',
      medium: 'max-w-[400px]',
      large: 'max-w-[600px]',
      full: 'w-full',
    };
    const alignClasses = {
      left: 'mr-auto ml-0',
      center: 'mx-auto',
      right: 'ml-auto mr-0',
    };
    return `${sizeClasses[size as keyof typeof sizeClasses]} ${alignClasses[align as keyof typeof alignClasses]}`;
  };

  const insertImageHtml = (url: string, alt: string = '', size: string = 'full', align: string = 'center') => {
    const imgClasses = getImageClasses(size, align);
    const figureAlign = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';
    const img = `<figure class="my-4 ${figureAlign}"><img src="${url}" alt="${alt || 'Article image'}" class="${imgClasses} rounded-lg shadow-md" style="display: block;" />${alt ? `<figcaption class="text-sm text-muted-foreground mt-2">${alt}</figcaption>` : ''}</figure>`;
    document.execCommand('insertHTML', false, img);
    handleContentChange();
  };

  const insertImage = () => {
    if (imageUrl) {
      insertImageHtml(imageUrl, imageAlt, imageSize, imageAlign);
      setImageUrl('');
      setImageAlt('');
      setImageSize('full');
      setImageAlign('center');
      setIsImageOpen(false);
    }
  };

  const uploadImage = async (file: File): Promise<string | null> => {
    const fileExt = file.name.split('.').pop() || 'png';
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `articles/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('article-images')
      .upload(filePath, file);

    if (uploadError) {
      console.error('Upload error:', uploadError);
      return null;
    }

    const { data } = supabase.storage
      .from('article-images')
      .getPublicUrl(filePath);

    return data.publicUrl;
  };

  const handlePaste = async (e: React.ClipboardEvent) => {
    const items = e.clipboardData.items;
    
    // Check for images in clipboard
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.type.startsWith('image/')) {
        e.preventDefault();
        const file = item.getAsFile();
        if (file) {
          setIsUploading(true);
          toast({ title: 'Uploading image...', description: 'Please wait' });
          
          const url = await uploadImage(file);
          if (url) {
            insertImageHtml(url, '');
            toast({ title: 'Image uploaded!', description: 'Image added to your article' });
          } else {
            toast({ title: 'Upload failed', description: 'Could not upload image', variant: 'destructive' });
          }
          setIsUploading(false);
        }
        return;
      }
    }

    // Handle plain text paste
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
    handleContentChange();
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-1 p-2 bg-muted/50 border-b">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => execCommand('bold')}
          title="Bold"
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => execCommand('italic')}
          title="Italic"
        >
          <Italic className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => execCommand('formatBlock', '<h2>')}
          title="Heading 1"
        >
          <Heading1 className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => execCommand('formatBlock', '<h3>')}
          title="Heading 2"
        >
          <Heading2 className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => execCommand('insertUnorderedList')}
          title="Bullet List"
        >
          <List className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => execCommand('insertOrderedList')}
          title="Numbered List"
        >
          <ListOrdered className="h-4 w-4" />
        </Button>

        {/* Link Button */}
        <Popover open={isLinkOpen} onOpenChange={setIsLinkOpen}>
          <PopoverTrigger asChild>
            <Button type="button" variant="ghost" size="sm" title="Insert Link">
              <Link className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80" align="start">
            <div className="space-y-3">
              <div className="space-y-1">
                <Label htmlFor="linkText" className="text-sm">Link Text</Label>
                <Input
                  id="linkText"
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                  placeholder="Click here"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="linkUrl" className="text-sm">URL</Label>
                <Input
                  id="linkUrl"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  placeholder="https://example.com"
                />
              </div>
              <Button type="button" size="sm" onClick={insertLink} className="w-full">
                Insert Link
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        {/* Image Button */}
        <Popover open={isImageOpen} onOpenChange={setIsImageOpen}>
          <PopoverTrigger asChild>
            <Button type="button" variant="ghost" size="sm" title="Insert Image">
              <Image className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80" align="start">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">
                Tip: You can also copy-paste images directly into the editor!
              </p>
              <div className="space-y-1">
                <Label htmlFor="imageUrl" className="text-sm">Image URL</Label>
                <Input
                  id="imageUrl"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="imageAlt" className="text-sm">Caption (optional)</Label>
                <Input
                  id="imageAlt"
                  value={imageAlt}
                  onChange={(e) => setImageAlt(e.target.value)}
                  placeholder="Image description"
                />
              </div>
              
              {/* Image Size */}
              <div className="space-y-1">
                <Label className="text-sm">Size</Label>
                <div className="flex gap-1">
                  {(['small', 'medium', 'large', 'full'] as const).map((size) => (
                    <Button
                      key={size}
                      type="button"
                      variant={imageSize === size ? 'default' : 'outline'}
                      size="sm"
                      className="flex-1 text-xs capitalize"
                      onClick={() => setImageSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Image Alignment */}
              <div className="space-y-1">
                <Label className="text-sm">Alignment</Label>
                <div className="flex gap-1">
                  <Button
                    type="button"
                    variant={imageAlign === 'left' ? 'default' : 'outline'}
                    size="sm"
                    className="flex-1"
                    onClick={() => setImageAlign('left')}
                  >
                    <AlignLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant={imageAlign === 'center' ? 'default' : 'outline'}
                    size="sm"
                    className="flex-1"
                    onClick={() => setImageAlign('center')}
                  >
                    <AlignCenter className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant={imageAlign === 'right' ? 'default' : 'outline'}
                    size="sm"
                    className="flex-1"
                    onClick={() => setImageAlign('right')}
                  >
                    <AlignRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <Button type="button" size="sm" onClick={insertImage} className="w-full">
                Insert Image
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        {isUploading && (
          <div className="flex items-center gap-2 ml-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            Uploading...
          </div>
        )}
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        className="min-h-[200px] p-4 focus:outline-none prose prose-sm max-w-none [&_a]:text-primary [&_a]:underline [&_figure]:my-4 [&_img]:rounded-lg [&_img]:shadow-md [&_figcaption]:text-sm [&_figcaption]:text-center [&_figcaption]:text-muted-foreground [&_figcaption]:mt-2"
        onInput={handleContentChange}
        onPaste={handlePaste}
        data-placeholder={placeholder}
        suppressContentEditableWarning
      />

      <style>{`
        [contenteditable]:empty:before {
          content: attr(data-placeholder);
          color: hsl(var(--muted-foreground));
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default RichTextEditor;
