import { useState, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Bold, Italic, Link, Image, Heading1, Heading2, List, ListOrdered } from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const RichTextEditor = ({ value, onChange, placeholder }: RichTextEditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [linkUrl, setLinkUrl] = useState('');
  const [linkText, setLinkText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [isLinkOpen, setIsLinkOpen] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);

  const execCommand = useCallback((command: string, value?: string) => {
    document.execCommand(command, false, value);
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

  const insertImage = () => {
    if (imageUrl) {
      const img = `<figure class="my-4"><img src="${imageUrl}" alt="${imageAlt || 'Article image'}" class="w-full rounded-lg shadow-md" />${imageAlt ? `<figcaption class="text-sm text-center text-muted-foreground mt-2">${imageAlt}</figcaption>` : ''}</figure>`;
      document.execCommand('insertHTML', false, img);
      handleContentChange();
      setImageUrl('');
      setImageAlt('');
      setIsImageOpen(false);
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
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
              <Button type="button" size="sm" onClick={insertImage} className="w-full">
                Insert Image
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        className="min-h-[200px] p-4 focus:outline-none prose prose-sm max-w-none [&_a]:text-primary [&_a]:underline [&_figure]:my-4 [&_img]:rounded-lg [&_img]:shadow-md [&_figcaption]:text-sm [&_figcaption]:text-center [&_figcaption]:text-muted-foreground [&_figcaption]:mt-2"
        onInput={handleContentChange}
        onPaste={handlePaste}
        dangerouslySetInnerHTML={{ __html: value }}
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
